"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { deletePost } from "@/lib/posts/edit-post";
import { Edit2, Loader2, MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { type TypePosts } from "./container-post";

export default function AsidePosts({
  isOwner,
  posts,
  selectedPost,
  onSelectPost,
}: {
  isOwner: boolean;
  posts: TypePosts[];
  selectedPost: TypePosts | null;
  onSelectPost: (post: TypePosts) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [postToDelete, setPostToDelete] = useState<TypePosts | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const params = useParams();
  const router = useRouter();

  const handleDelete = async () => {
    if (!postToDelete) return;
    setIsDeleting(true);
    const result = await deletePost(
      postToDelete.id,
      params.user_slug as string,
    );
    setIsDeleting(false);
    if (result.success) {
      setPostToDelete(null);
    }
  };

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
              <div className="flex gap-3 relative pr-6">
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
                <div className="flex flex-col justify-between flex-1">
                  <h3
                    className={`text-sm font-bold leading-tight line-clamp-2 pr-4 ${isActive ? "text-primary" : ""}`}
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {post.author} • {new Date(post.time).toLocaleDateString()}
                  </p>
                </div>

                {isOwner && (
                  <div
                    className="absolute right-0 top-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors focus:outline-none">
                          <MoreVertical size={16} className="text-slate-500" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            router.push(
                              `/${params.user_slug}/posts/${post.id}/`,
                            )
                          }
                        >
                          <Edit2 size={14} className="mr-2" />
                          Éditer
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-500 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-950"
                          onClick={() => setPostToDelete(post)}
                        >
                          <Trash2 size={14} className="mr-2" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
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

      <AlertDialog
        open={!!postToDelete}
        onOpenChange={(open) => !open && setPostToDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Cela supprimera définitivement la
              publication et toutes ses données associées.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
              disabled={isDeleting}
              className="bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            >
              {isDeleting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : null}
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </aside>
  );
}
