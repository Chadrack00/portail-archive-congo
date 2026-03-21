"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function checkIfLiked(idPost: string): Promise<boolean[]> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) return [false, false];

  const like = await prisma.likes.findMany({
    where: {
      id_post: idPost,
      userId: session.user.id,
    },
  });
  return [
    like?.some((l) => l.type === "aime"),
    like?.some((l) => l.type === "non_aime"),
  ];
}

export async function like(
  idPost: string,
  type: "aime" | "non_aime",
  user_slug: string,
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) return { success: false, message: "Utilisateur non connecté." };
    await prisma.likes.create({
      data: {
        id_post: idPost,
        userId: session.user.id,
        type,
      },
    });
    revalidatePath(`/${user_slug}/posts`);
    return { success: true, message: "Like ajouté avec succès !" };
  } catch (error) {
    console.error("Error liking post:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'ajout du like.",
    };
  }
}
export async function unLike(
  idPost: string,
  type: "aime" | "non_aime",
  user_slug: string,
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) return { success: false, message: "Utilisateur non connecté." };
    await prisma.likes.deleteMany({
      where: {
        id_post: idPost,
        userId: session.user.id,
        type,
      },
    });
    revalidatePath(`/${user_slug}/posts`);
    return { success: true, message: "Like retiré avec succès !" };
  } catch (error) {
    console.error("Error liking post:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors du retrait du like.",
    };
  }
}
