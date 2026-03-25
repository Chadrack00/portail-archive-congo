"use server";

import { takeRdvSchema, TakeRdvSchema } from "@/types/zod-types/post-types";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "../auth";
import { prisma } from "../prisma";
import { StatusRvd } from "@/generated/prisma";

export async function takeRdvAction(data: TakeRdvSchema, id_medecin: string) {
  const parsed = takeRdvSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Veuillez vérifier les champs du formulaire.",
    };
  }

  try {
    const user = await auth.api.getSession({
      headers: await headers(),
    });

    if (!user) {
      return {
        success: false,
        message: "Vous devez être connecté pour prendre un rendez-vous.",
      };
    }

    const patient = await prisma.patients.findUnique({
      where: {
        userId: user.session.userId,
      },
    });

    if (!patient) {
      return {
        success: false,
        message: "Seuls les patients peuvent prendre un rendez-vous.",
      };
    }

    await prisma.rendezVous.create({
      data: {
        motif: parsed.data.motif,
        date_rdv: parsed.data.date_rdv,
        id_patient: patient.id_patient,
        id_medecin: id_medecin,
      },
    });

    revalidatePath("/"); // revalidate generic
    return {
      success: true,
      message: "Rendez-vous pris avec succès !",
    };
  } catch (error) {
    console.error("Error creating rdv:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de la prise de rendez-vous.",
    };
  }
}

export async function modifieStatus(newStatus: string, id_rdv: string, slug: string) {
  if (["attente", "confirme", "annule", "termine"].includes(newStatus)) {
    await prisma.rendezVous
      .update({
        where: { id_rdv: id_rdv },
        data: {
          status: newStatus as StatusRvd,
        },
      })
      .then((t) => {
        console.log(t);
        revalidatePath(`/${slug}`)
        return true;
      })
      .catch((c) => {
        console.log(c);
        return false;
      });
  }
  return false;
}
