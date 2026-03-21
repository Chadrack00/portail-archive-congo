import FormEdit from "@/components/user/posts/form-edit";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ user_slug: string; edit_post: string }>;
}) {
  const { user_slug, edit_post } = await params;

  const post = await prisma.posts.findUnique({
    where: {
      slug: edit_post,
    },
    select: {
      id_post: true,
      titre: true,
      description: true,
      lien_image: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6">
      <FormEdit post={post} user_slug={user_slug} />
    </div>
  );
}
