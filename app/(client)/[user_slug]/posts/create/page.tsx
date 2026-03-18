import FormCreatePost from "@/components/user/posts/form-create";
import { checkSlug } from "@/lib/posts/check-slug";

export default async function CreatePost({
  params,
}: {
  params: Promise<{ user_slug: string }>;
}) {
  const { user_slug } = await params;
  await checkSlug(user_slug);
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Top Navigation Bar */}

      <main className="max-w-4xl mx-auto py-8 px-4">
        {/* Breadcrumbs & Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Créer une publication
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Partagez vos connaissances à la communauté médicale.
          </p>
        </div>

        <FormCreatePost slug={user_slug}/>
      </main>
    </div>
  );
}
