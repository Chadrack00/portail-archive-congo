"use client";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { type TypePosts } from "./container-post";

export default function AsidePosts({
  posts,
  selectedPost,
  onSelectPost,
}: {
  posts: TypePosts[];
  selectedPost: TypePosts | null;
  onSelectPost: (post: TypePosts) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <aside className="w-full md:w-[400px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0">
      <div className="p-4 space-y-4 flex flex-col ">
        {/* <!-- Filters --> */}
        <Field>
          <Input
            type="search"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Field>
      </div>
      {/* <!-- Feed List --> */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* <!-- Feed Item --> */}
        {filteredPosts.map((post) => {
          const isActive = selectedPost?.id === post.id;
          return (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className={`p-4 border-l-4 cursor-pointer transition-colors ${
                isActive
                  ? "bg-primary/10 border-primary"
                  : "bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <div className="flex gap-3">
                {post.image ? (
                  <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      className="w-full h-full object-cover"
                      alt={post.title.substring(0, 100)}
                      src={post.image}
                      width={100}
                      height={100}
                    />
                  </div>
                ) : (
                  <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-200 flex items-center justify-center">
                    <span className="text-xs text-slate-500">
                      Pas d&apos;image
                    </span>
                  </div>
                )}
                <div className="flex flex-col justify-between">
                  <h3
                    className={`text-sm font-bold leading-tight line-clamp-2 ${isActive ? "text-primary" : ""}`}
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {post.author} • {new Date(post.time).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {filteredPosts.length === 0 && (
          <div className="p-4 text-center text-sm text-slate-500">
            Aucun résultat trouvé pour &quot;{searchTerm}&quot;.
          </div>
        )}
      </div>
    </aside>
  );
}
