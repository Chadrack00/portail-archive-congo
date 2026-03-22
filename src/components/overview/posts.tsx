import { getOverviewPosts } from "@/lib/overview/action";
import { ArrowRight, BookX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Posts() {
  const posts = await getOverviewPosts();

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Articles et Conseils Santé
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Découvrez les dernières actualités et conseils de nos experts
            médicaux.
          </p>
        </div>
      </div>

      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 border-dashed text-center">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-full mb-4">
            <BookX size={32} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Aucun article publié
          </h3>
          <p className="text-slate-500 mt-1 max-w-sm">
            Vos praticiens n&apos;ont pas encore partagé d&apos;articles ou de
            conseils santé.
          </p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent pb-4">
          {posts.map((post, index) => (
            <aside
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all group shrink-0 h-fit"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={`Image illustrative pour la ${post.title.toLowerCase().substring(0, 100)}`}
                  src={post.image || "/placeholder.jpg"}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 hover:text-primary transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      alt={`Portrait de ${post.authorName}`}
                      src={post.authorImage || "/placeholder-user.jpg"}
                    />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {post.authorName}
                  </span>
                </div>
                <Link
                  className="inline-flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all"
                  href={post.slug}
                >
                  Lire la suite <ArrowRight className="text-base!" size={15} />
                </Link>
              </div>
            </aside>
          ))}
        </div>
      )}
    </section>
  );
}
