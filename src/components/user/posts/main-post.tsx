import Image from "next/image";
import { Suspense } from "react";
import { type TypePosts } from "./container-post";
import ThumbsUpDown from "./thumbs-up-down";
import ReactMarkdown from "react-markdown";

export default function MainPost({
  selectedPost,
}: {
  selectedPost: TypePosts | null;
}) {
  if (!selectedPost) {
    return (
      <main className="flex-1 flex items-center justify-center bg-background-light dark:bg-background-dark">
        <p className="text-slate-500">Aucune publication sélectionnée.</p>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar">
      <article className="max-w-4xl mx-auto px-6 py-8">
        {/* <!-- Post Header --> */}
        {selectedPost.image ? (
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm mb-8">
            <Image
              className="w-full h-full object-cover"
              alt={selectedPost.title}
              src={selectedPost.image}
              width={800}
              height={400}
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-sm">
              Mis à jour le {selectedPost.modifie_le}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {selectedPost.title}
          </h1>
          <div className="flex items-center justify-between py-4 border-y border-slate-200 dark:border-slate-800 my-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                {selectedPost.authorImage ? (
                  <Image
                    className="w-full h-full object-cover"
                    alt={`Portrait de ${selectedPost.author}`}
                    src={selectedPost.authorImage}
                    width={48}
                    height={48}
                  />
                ) : (
                  <span className="text-xl font-bold text-slate-500">
                    {selectedPost.author.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {selectedPost.author}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedPost.specilite}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Suspense>
                <ThumbsUpDown
                  aime={selectedPost.aime}
                  non_aime={selectedPost.non_aime}
                  idPost={selectedPost.id}
                />
              </Suspense>
            </div>
          </div>
          {/* <!-- Article Content --> */}
          <div
            className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6"
          />
          {/* <!-- Comments Section --> */}
         <ReactMarkdown>{selectedPost.description}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
