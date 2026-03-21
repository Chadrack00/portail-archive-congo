import { prisma } from "@/lib/prisma";
import { PostTypes } from "@/types/profil/slug";
import { Plus, ReceiptText, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
export default async function StaticPostPage({ slug }: { slug: string }) {
  const posts: PostTypes[] = await getStaticPost({ slug });
  return (
    <> 
      {posts.length > 0 && (
        <div className="relative flex-1">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 rounded-xl border border-slate-100 dark:border-slate-800 p-3 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-alt={post.title}
                  src={post.image ?? ""}
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </div>
              <div className="px-1">
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Il y a {post.createdAt.getDate()}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        <ThumbsUp />
                      </span>{" "}
                      {post.thumbsUp}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">
                        <ThumbsDown />
                      </span>{" "}
                      {post.thumbsDown}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link href={`/${slug}/posts`} className="absolute bottom-1 right-1 gap-2 flex-end">
            <Button>
              Voir plus <Plus size={15} />
            </Button>
          </Link>
        </div>
      )}

      {/* <PostCard/> */}

      {!(posts.length > 0) && (
        <div className="flex flex-col items-center justify-center py-20 text-center col-span-full border">
          <div className="rounded-full bg-slate-50 dark:bg-slate-800/50 p-6 mb-4">
            <ReceiptText
              size={48}
              className="text-slate-300 dark:text-slate-600"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Aucune publication pour le moment
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
            Cet utilisateur n&apos;a pas encore partagé de posts. Revenez plus
            tard pour découvrir ses actualités.
          </p>
        </div>
      )}
    </>
  );
}

const getStaticPost = async ({ slug }: { slug: string }) => {
  try {
    const { checkSlug } = await import("@/lib/posts/check-slug");
    const user = await checkSlug(slug);
    
    if (!user) return [];

    const results = await prisma.posts.findMany({
      where: {
        medecins: { userId: user.id },
      },
      include: {
        likes: { select: { type: true } },
      },
      orderBy: {
        cree_le: "desc",
      },
      take: 3,
    });

    return results.map((post) => ({
      title: post.titre,
      image: post.lien_image ?? undefined,
      description: post.description,
      createdAt: post.cree_le,
      thumbsUp: post.likes.filter((l) => l.type === "aime").length,
      thumbsDown: post.likes.filter((l) => l.type === "non_aime").length,
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error fetching static posts:", error);
    return [];
  }
};
