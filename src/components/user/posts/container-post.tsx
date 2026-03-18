"use client";
import AsidePosts from "./aside";
import MainPost from "./main-post";
import { useState } from "react";

export type TypePosts = {
  id: string;
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
}

export default function ContainerPost({posts}: {posts: TypePosts[]}) {
  const [selectedPost, setSelectedPost] = useState<TypePosts | null>(posts[0] || null);

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* <!-- Sidebar (Post Feed) --> */}
      <AsidePosts posts={posts} selectedPost={selectedPost} onSelectPost={setSelectedPost}/>
      {/* <!-- Main Content Area --> */}
      <MainPost selectedPost={selectedPost}/>
    </div>
  );
}
