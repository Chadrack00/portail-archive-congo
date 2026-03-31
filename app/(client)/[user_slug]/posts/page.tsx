import ContainerPost, {
  type TypePosts,
} from "@/components/user/posts/container-post";
import { auth } from "@/lib/auth";
import { checkSlug } from "@/lib/posts/check-slug";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

async function getPostsData(userId: string): Promise<TypePosts[]> {
  const posts = await prisma.posts.findMany({
    where: { medecins: { userId } },
    include: {
      medecins: { include: { user: true } },
      likes: { select: { type: true } },
    },
  });

  return posts.map((post) => ({
    id: post.id_post,
    slug: post.slug,
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
    aime: post.likes.filter((l) => l.type === "aime").length,
    non_aime: post.likes.filter((l) => l.type === "non_aime").length,
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
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isOwner = user.id === session?.user.id;

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex h-screen flex-col overflow-hidden">
        {/* <!-- Top Navigation Bar --> */}
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 shrink-0 z-10">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Les publications de </span>
            <span className="text-lg font-bold text-primary">{user.name}</span>
          </div>
          {isOwner && (
            <Link
              href={`/${user_slug}/posts/create`}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Créer un post
            </Link>
          )}
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <ContainerPost posts={posts} isOwner={isOwner} />
        </Suspense>
      </div>
    </div>
  );
}
