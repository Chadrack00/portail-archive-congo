"use server";
import { prisma } from "@/lib/prisma";

export async function getOverviewMedecins() {
  try {
    const medecinsList = await prisma.medecins.findMany({
      include: {
        user: true,
      },
      take: 10,
      orderBy: { cree_le: "desc" },
    });

    return medecinsList.map((m) => ({
      nom:
        `${m.user.name || ""} ${m.user.postnom || ""}`.trim() || "Dr. Inconnu",
      slug: m.user.id,
      image: m.user.image ?? "",
      specialite: m.specialite ?? "Spécialité non renseignée",
      adresse: m.user.adresse_residence ?? "Adresse non renseignée",
      disponible: m.disponible,
    }));
  } catch (error) {
    console.error("Error fetching overview medecins:", error);
    return [];
  }
}

export async function getOverviewPosts() {
  try {
    const postsList = await prisma.posts.findMany({
      include: {
        medecins: {
          include: {
            user: true,
          },
        },
      },
      orderBy: { cree_le: "desc" },
      take: 6,
    });

    return postsList.map((post) => ({
      image: post.lien_image ?? "",
      cat: post.medecins.specialite ?? "Santé",
      title: post.titre,
      authorImage: post.medecins.user.image ?? "",
      authorName:
        `${post.medecins.user.name || ""} ${post.medecins.user.postnom || ""}`.trim() ||
        "Dr. Inconnu",
      slug: `/${post.medecins.user.id}/posts/${post.slug}`,
    }));
  } catch (error) {
    console.error("Error fetching overview posts:", error);
    return [];
  }
}
