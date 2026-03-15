"use server";

import { ReportSchema, ReportType } from "@/types/zod-types/profil";
import { prisma } from "../prisma";

export async function signalUserAction(data: ReportType) {
  const result = ReportSchema.safeParse(data);
  if (!result.success) {
    return { error: "Données invalides" };
  }


try{
  await prisma.$transaction(async (tx) => {
    const d = await tx.medecins.update({
    where: { userId: result.data.id_medecin },
    data: {
      nombre_signalement: {
        increment: 1,
      },
    },
  });

  await tx.signalements.create({
    data: {
      message: result.data.motif,
      userId: result.data.id_medecin,
    },
  });

  if(d.nombre_signalement >= 10){
    await tx.user.update({
      where: { id: result.data.id_medecin },
      data: {
        is_active: false,
      },
    });
  }

  })
}catch(err){
  console.log(err)
  return { error: "Erreur lors du signalement " + err };
}

  
  
  return { success: "Signalement envoyé avec succès" };
}
