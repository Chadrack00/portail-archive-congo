"use server";

import { StatusRvd } from "@/generated/prisma";
import {
  sendEmailInvitation,
  sendEmailRappelPatient,
  sendEmailStatusChange,
} from "@/lib/mail/client-nodemailer";
import { prisma } from "@/lib/prisma";
import { put } from "@vercel/blob";
import { revalidatePath, revalidateTag } from "next/cache";

export async function getRendezVous(userSlug: string) {
  try {
    const list = await prisma.rendezVous.findMany({
      where: {
        OR: [
          { patients: { user: { slug: userSlug } } },
          { medecins: { user: { slug: userSlug } } },
        ],
      },
      include: {
        patients: { include: { user: true } },
        medecins: { include: { user: true } },
        consultations: { include: { fichiers: true } },
      },
      orderBy: { cree_le: "desc" },
    });
    return { success: true, data: list };
  } catch (error) {
    console.error("Error fetching rendez-vous:", error);
    return { success: false, data: [] };
  }
}

export async function updateRendezVousStatus(
  id_rdv: string,
  status: StatusRvd,
) {
  try {
    const updated = await prisma.rendezVous.update({
      where: { id_rdv },
      data: { status },
      include: {
        patients: { include: { user: true } },
        medecins: { include: { user: true } },
      },
    });

    const patientEmail = updated.patients.user.email;
    const patientName = updated.patients.user.name || "Patient";
    const medecinName =
      `Dr. ${updated.medecins.user.name || ""} ${updated.medecins.user.postnom || ""}`.trim();

    await sendEmailStatusChange({
      to: patientEmail,
      patientName,
      medecinName,
      newStatus: status,
    });

    revalidatePath("/[user_slug]/cons-rdv", "page");
    return { success: true };
  } catch (error) {
    console.error("Error updating status:", error);
    return { success: false };
  }
}

export async function deleteRendezVous(id_rdv: string) {
  try {
    await prisma.rendezVous.delete({ where: { id_rdv } });
    revalidatePath("/[user_slug]/cons-rdv", "page");
    return { success: true };
  } catch (error) {
    console.error("Error deleting rendez-vous:", error);
    return { success: false };
  }
}

export async function createConsultation(id_rdv: string, formData: FormData) {
  try {
    const diagnostique = formData.get("diagnostique") as string;
    const files = formData.getAll("files") as File[];

    // Process files locally
    const savedFiles = [];
    for (const file of files) {
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        // const fileName = `${randomUUID()}-${file.name}`;
        // const filePath = join(process.cwd(), "public/uploads", fileName);
        // await writeFile(filePath, buffer);
        const blob = await put(`consultations/${Date.now()}-${file.name}`, buffer, {
          access: "public",
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });

        savedFiles.push({ lien_fichier: blob.url });
      }
    }

    await prisma.consultations.create({
      data: {
        id_rdv,
        diagnostique,
        fichiers:
          savedFiles.length > 0
            ? {
                create: savedFiles,
              }
            : undefined,
      },
    });

    // @ts-expect-error: Next.js canary signature specifies a second argument although runtime standard signature takes 1
    revalidateTag("rating");
    revalidatePath("/[user_slug]/cons-rdv", "page");
    return { success: true };
  } catch (error) {
    console.error("Error creating consultation:", error);
    return { success: false };
  }
}

export async function getConsultationsList(userSlug: string) {
  try {
    const list = await prisma.consultations.findMany({
      where: {
        OR: [
          { rdv: { patients: { user: { slug: userSlug } } } },
          { rdv: { medecins: { user: { slug: userSlug } } } },
        ],
      },
      include: {
        fichiers: true,
        rdv: {
          include: {
            patients: { include: { user: true } },
            medecins: { include: { user: true } },
          },
        },
      },
      orderBy: { cree_le: "desc" },
    });
    return { success: true, data: list };
  } catch (error) {
    console.error("Error fetching consultations:", error);
    return { success: false, data: [] };
  }
}

export async function deleteConsultation(id_consultation: string) {
  try {
    await prisma.consultations.delete({ where: { id_consultation } });
    revalidatePath("/[user_slug]/cons-rdv", "page");
    return { success: true };
  } catch (error) {
    console.error("Error deleting consultation:", error);
    return { success: false };
  }
}

export async function updateConsultation(
  id_consultation: string,
  formData: FormData,
) {
  try {
    const diagnostique = formData.get("diagnostique") as string;
    await prisma.consultations.update({
      where: { id_consultation },
      data: { diagnostique },
    });
    revalidatePath("/[user_slug]/cons-rdv", "page");
    return { success: true };
  } catch (error) {
    console.error("Error updating consultation:", error);
    return { success: false };
  }
}

export async function rappelPatient(id_rdv: string) {
  try {
    const rdv = await prisma.rendezVous.findUnique({
      where: { id_rdv },
      include: {
        patients: { include: { user: true } },
        medecins: { include: { user: true } },
      },
    });

    if (!rdv) return { success: false, message: "Rendez-vous introuvable." };

    const patientEmail = rdv.patients.user.email;
    const patientName = rdv.patients.user.name || "Patient";
    const medecinName =
      `Dr. ${rdv.medecins.user.name || ""} ${rdv.medecins.user.postnom || ""}`.trim();

    await sendEmailRappelPatient({
      to: patientEmail,
      subject: "Rappel de rendez-vous",
      patientName,
      medecinName,
      date_rdv: rdv.date_rdv,
    });

    return { success: true };
  } catch (error) {
    console.error("Error reminding patient:", error);
    return { success: false };
  }
}

export async function invitePatientForAnotherRendezVous(
  id_rdv: string,
  message: string,
) {
  try {
    const rdv = await prisma.rendezVous.findUnique({
      where: { id_rdv },
      include: {
        patients: { include: { user: true } },
        medecins: { include: { user: true } },
      },
    });

    if (!rdv) return { success: false, message: "Rendez-vous introuvable." };

    const patientEmail = rdv.patients.user.email;
    const patientName = rdv.patients.user.name || "Patient";
    const medecinName =
      `Dr. ${rdv.medecins.user.name || ""} ${rdv.medecins.user.postnom || ""}`.trim();

    await sendEmailInvitation({
      to: patientEmail,
      patientName,
      medecinName,
      message,
    });

    return { success: true };
  } catch (error) {
    console.error("Error inviting patient:", error);
    return { success: false };
  }
}
