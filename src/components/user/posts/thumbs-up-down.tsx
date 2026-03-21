"use client";
import { checkIfLiked, like, unLike } from "@/lib/posts/check-if-liked";
import { Loader2, ThumbsDown, ThumbsUp } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThumbsUpDown({
  aime,
  non_aime,
  idPost,
}: {
  aime: number;
  non_aime: number;
  idPost: string;
}) {
  const [hasLiked, setHasLiked] = useState<boolean[]>([false, false]);
  const [loading, setLoading] = useState<boolean[]>([false, false]);

  useEffect(() => {
    // On vérifie l'état au montage du composant
    async function check() {
      const liked = await checkIfLiked(idPost);
      setHasLiked(liked);
    }
    check();
  }, [idPost]);
  const params = useParams();
  return (
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors rounded-xl">
        <span
          className="material-symbols-outlined text-xl"
          onClick={async () => {
            setLoading([true, false]);
            if (hasLiked[0]) {
              await unLike(idPost, "aime", params.user_slug as string);
            } else {
              await like(idPost, "aime", params.user_slug as string);
            }
            setHasLiked([!hasLiked[0], hasLiked[1]]);
            setLoading([false, false]);
          }}
        >
          {loading[0] ? (
            <Loader2 className="animate-spin" size={20} color="#137fec" />
          ) : (
            <ThumbsUp
              strokeWidth={1}
              size={20}
              color="#137fec"
              fill={hasLiked[0] ? "#137fec" : ""}
            />
          )}
        </span>
        <span className="text-sm font-semibold">{aime}</span>
      </button>
      <div className="w-px bg-slate-300 dark:bg-slate-600 my-2"></div>
      <button className="flex items-center px-4 py-2 gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors rounded-xl">
        <span
          className="material-symbols-outlined text-xl"
          onClick={async () => {
            setLoading([false, true]);
            if (hasLiked[1]) {
              await unLike(idPost, "non_aime", params.user_slug as string);
            } else {
              await like(idPost, "non_aime", params.user_slug as string);
            }
            setHasLiked([hasLiked[0], !hasLiked[1]]);
            setLoading([false, false]);
          }}
        >
          {loading[1] ? (
            <Loader2 className="animate-spin" size={20} color="#ff0000" />
          ) : (
            <ThumbsDown
              strokeWidth={1}
              size={20}
              color="#ff0000"
              fill={hasLiked[1] ? "#ff0000" : ""}
            />
          )}
        </span>
        <span className="text-sm font-semibold">{non_aime}</span>
      </button>
    </div>
  );
}
