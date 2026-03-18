import ContainerPost, {
  type TypePosts,
} from "@/components/user/posts/container-post";
import { checkSlug } from "@/lib/posts/check-slug";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

async function getPostsData(userId: string): Promise<TypePosts[]> {
  const posts = await prisma.posts.findMany({
    where: { medecins: { userId } },
    include: { medecins: { include: { user: true } } },
  });

  return posts.map((post) => ({
    id: post.id_post,
    title: post.titre,
    description: post.description,
    image: post.lien_image ?? "",
    author:
      `${post.medecins.user.name || ""} ${post.medecins.user.postnom || ""}`.trim() ||
      "Auteur inconnu",
    authorImage: post.medecins.user.image ?? "",
    time: post.cree_le.toISOString(),
    modifie_le: post.modifie_le.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    specilite: post.medecins.specialite,
    aime: post.nombre_aime,
    non_aime: post.nombre_non_aime,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ user_slug: string }>;
}) {
  const { user_slug } = await params;
  const user = await checkSlug(user_slug);
  const posts = await getPostsData(user.id);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex h-screen flex-col overflow-hidden">
        {/* <!-- Top Navigation Bar --> */}
        <header className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 shrink-0 z-10">
          <span className="text-lg font-bold">Les publications de </span>
          <span className="text-lg font-bold text-primary">{user.name}</span>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <ContainerPost posts={posts} />
        </Suspense>
      </div>
    </div>
  );
}
