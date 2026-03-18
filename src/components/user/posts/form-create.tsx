"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPostAction } from "@/lib/posts/create-post";
import {
  createPostSchema,
  type CreatePostSchema,
} from "@/types/zod-types/post-types";
import { zodResolver } from "@hookform/resolvers/zod";
import "easymde/dist/easymde.min.css";
import { ImagePlus } from "lucide-react";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function FormCreatePost({slug}:{slug: string}) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (data: CreatePostSchema) => {
    startTransition(async () => {
      await processForm(data, slug);

    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Title Input */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <Label
          className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
          htmlFor="title"
        >
          Titre de l&apos;article
        </Label>
        <Input
          className="w-full text-lg font-semibold placeholder:font-normal"
          id="title"
          placeholder="Saisissez le titre ici..."
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">
            {errors.title.message as string}
          </p>
        )}
      </div>

      {/* Image Upload Area */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <Label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Image de couverture
        </Label>
        <div className="relative group cursor-pointer border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-12 flex flex-col items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
          <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
            <span className="material-symbols-outlined text-3xl">
              <ImagePlus strokeWidth={1} />
            </span>
          </div>
          <p className="text-slate-700 dark:text-slate-200 font-medium">
            Cliquez pour télécharger ou glissez-déposez
          </p>
          <p className="text-slate-500 text-sm mt-1">
            PNG, JPG, GIF jusqu&apos;à MB (Recommandé: 1600x900px)
          </p>
          <Input
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            type="file"
            {...register("image_profile")}
          />
        </div>
        {errors.image_profile && (
          <p className="text-red-500 text-sm mt-1">
            {errors.image_profile.message as string} 
          </p>
        )}
      </div>

      {/* Content Area (Rich Text Mockup) */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <Label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Contenu de la publication
          </Label>
        </div>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message as string}
          </p>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-end justify-end gap-4 py-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-end gap-3 w-full sm:w-auto">
          <Button
            className="flex-1 sm:flex-none relative overflow-hidden group shadow-md shadow-primary/20"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Publication..." : "Publier"}
          </Button>
        </div>
      </div>
    </form>
  );
}

async function processForm(data: CreatePostSchema, slug:string) {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);

  // Extracting file from FileList logic
  if (data.image_profile instanceof File) {
    formData.append("image_profile", data.image_profile);
  } else if (
    data.image_profile instanceof FileList &&
    data.image_profile.length > 0
  ) {
    formData.append("image_profile", data.image_profile[0]);
  }

  const result = await createPostAction(formData);

  if (result.success) {
    // Optionally trigger a toast notification or redirect
    console.log(result.message);
    redirect(`/${slug}/posts`);
  } else {
    console.log(result.message || "Erreur de validation des données");
    console.log(result.errors);
  }
}
