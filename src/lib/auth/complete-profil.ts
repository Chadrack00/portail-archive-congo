"use server";
import {
  CompleteProfilOutput,
  completeProfilSchema,
} from "@/types/zod-types/complete-profil";
import { put } from "@vercel/blob";
import { headers } from "next/headers";
import { auth } from "../auth";
import { prisma } from "../prisma";

export async function completeProfilAction(values: CompleteProfilOutput) {
  try {
    console.log("Tentation de prise des sessions");
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    console.log("Session => : ", session);
    if (!session || !session.user) {
      return { status: 401, message: "Non autorisé" };
    }

    const parsed = completeProfilSchema.safeParse(values);

    if (!parsed.success) {
      return {
        status: 400,
        message: "Erreur de validation des données.",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const data = parsed.data;

    // 1. Sauvegarder l'image
    let imagePath = "";
    if (data.image_profile && typeof window === "undefined") {
      // const uploadDir = join(process.cwd(), "public/uploads/profiles");
      // Extraction the file blob Server-side
      const file = values.image_profile;
      console.log(file.name);
      const bytes = await file?.arrayBuffer();
      const buffer: Buffer = Buffer.from(bytes);

      const blob = await put(`profiles/${Date.now()}-${file.name}`, buffer, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      imagePath = blob.url;
      // const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      // const filePath = join(uploadDir, fileName);
      // await writeFile(filePath, buffer);

      // imagePath = `/uploads/profiles/${fileName}`;
    }

    // 2. Générer le slug
    let baseSlug = `${data.prenom}-${session.user.name}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    if (baseSlug.length < 3) baseSlug = baseSlug.padEnd(3, "0");
    if (baseSlug.length > 53) baseSlug = baseSlug.substring(0, 53); // laisser de la place pour 6 caractères

    let generatedSlug = baseSlug;
    const slugExists = await prisma.user.findFirst({
      where: { slug: generatedSlug },
    });

    if (slugExists) {
      const randomString = Math.random().toString(36).substring(2, 8);
      generatedSlug = `${baseSlug}-${randomString}`;
    }

    // 3. Mettre à jour l'utilisateur
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        postnom: data.postnom,
        prenom: data.prenom,
        slug: generatedSlug,
        numero_telephone: data.numero_telephone,
        date_de_naissance: data.date_naissance,
        adresse_residence: data.adresse_residence,
        sexe: data.sexe,
        ...(imagePath ? { image: imagePath } : {}),
      },
    });

    // 4. Créer le profil associé
    if (data.type_profil === "PATIENT") {
      await prisma.patients.upsert({
        where: { userId: session.user.id },
        update: {},
        create: {
          userId: session.user.id,
        },
      });
    } else if (data.type_profil === "MEDECIN") {
      await prisma.medecins.upsert({
        where: { userId: session.user.id },
        update: {
          specialite: data.specialite!,
          description: data.description!,
        },
        create: {
          userId: session.user.id,
          specialite: data.specialite!,
          description: data.description!,
        },
      });
    }

    return { status: 200, message: "Profil complété avec succès." };
  } catch (error) {
    console.error("Erreur lors de la complétion du profil:", error);
    return {
      status: 500,
      message: "Une erreur inattendue s'est produite lors de l'enregistrement.",
    };
  }
}
