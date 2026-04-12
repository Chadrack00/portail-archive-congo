"use server";

import { createPostSchema } from "@/types/zod-types/post-types";
import { headers } from "next/headers";
import { auth } from "../auth";
import { prisma } from "../prisma";
import { put } from "@vercel/blob";

export async function createPostAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  // Validate the data on the server side
  const parsed = createPostSchema.safeParse({
    title: data.title,
    description: data.description,
    image_profile: formData.get("image_profile"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const user = await auth.api.getSession({
      headers: await headers(),
    });

    if (!user) {
      return {
        success: false,
        message: "Vous devez être connecté pour créer une publication. 1",
      };
    }
    console.log(user.user.id);
    const medecin = await prisma.medecins.findUnique({
      where: {
        userId: user.session.userId,
      },
    });

    if (!medecin) {
      return {
        success: false,
        message: "Vous devez être connecté pour créer une publication. 2",
      };
    }

    const file = parsed.data.image_profile as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Chemin absolu vers le dossier public/uploads/posts
    // const uploadDir = join(process.cwd(), "public", "uploads", "posts");

    // // S'assurer que le dossier existe
    // await mkdir(uploadDir, { recursive: true });

    // // Générer un nom de fichier unique
    // const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    // const extension = file.name.split(".").pop() || "jpg";
    // const filename = `${uniqueSuffix}.${extension}`;
    // const destPath = join(uploadDir, filename);

    // // Écrire le fichier sur le disque
    // await writeFile(destPath, buffer);

    // // L'URL publique de l'image
    // const imageUrl = `/uploads/posts/${filename}`;

    const blob = await put(`posts/${Date.now()}-${file.name}`, buffer, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const imageUrl = blob.url;

    // TODO: Add actual database saving logic via prisma
    // Example:
    await prisma.posts.create({
      data: {
        titre: parsed.data.title,
        description: parsed.data.description,
        lien_image: imageUrl,
        slug: parsed.data.title.toLowerCase().replaceAll(" ", "-"),
        id_medecin: medecin.id_medecin,
      },
    });

    console.log("Valid data received on server:", parsed.data);
    console.log("File saved at:", imageUrl);

    return {
      success: true,
      message: "Publication créée avec succès !",
    };
  } catch (error) {
    console.error("Error creating post:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de la création de la publication.",
    };
  }
}
