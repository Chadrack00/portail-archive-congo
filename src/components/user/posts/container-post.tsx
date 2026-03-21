"use client";
import { useState } from "react";
import AsidePosts from "./aside";
import MainPost from "./main-post";

export type TypePosts = {
  id: string;
  slug: string;
  title: string;
  image: string;
  author: string;
  authorImage: string;
  time: string;
  modifie_le: string;
  specilite: string;
  aime: number;
  non_aime: number;
  description: string;
};

export default function ContainerPost({ posts, isOwner }: { posts: TypePosts[], isOwner: boolean }) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(
    posts[0]?.id || null,
  );

  const selectedPost =
    posts.find((p) => p.id === selectedPostId) || posts[0] || null;

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* <!-- Sidebar (Post Feed) --> */}
      <AsidePosts
      isOwner={isOwner}
        posts={posts}
        selectedPost={selectedPost}
        onSelectPost={(p) => setSelectedPostId(p?.id || null)}
      />
      {/* <!-- Main Content Area --> */}
      <MainPost selectedPost={selectedPost} />
    </div>
  );
}
