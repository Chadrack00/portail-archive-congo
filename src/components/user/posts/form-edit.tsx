"use client";

import { FileUploadProfil } from "@/components/complete-profil/file-uploads";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { editPost } from "@/lib/posts/edit-post";
import { editPostSchema } from "@/types/zod-types/post-types";
import { zodResolver } from "@hookform/resolvers/zod";
import "easymde/dist/easymde.min.css";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type PostProps = {
  id_post: string;
  titre: string;
  description: string;
  lien_image: string | null;
};

export default function FormEdit({
  post,
  user_slug,
}: {
  post: PostProps;
  user_slug: string;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.input<typeof editPostSchema>>({
    resolver: zodResolver(editPostSchema),
    defaultValues: {
      title: post.titre,
      description: post.description,
    },
  });

  const onSubmit = async (data: z.input<typeof editPostSchema>) => {
    setError(null);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image_profile) {
      formData.append("image_profile", data.image_profile as File);
    }

    const res = await editPost(formData, post.id_post, user_slug);
    if (res.success) {
      router.push(`/${user_slug}/posts`);
      router.refresh();
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
      <h1 className="text-2xl font-bold mb-6">Éditer le post</h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre</FormLabel>
                <FormControl>
                  <Input placeholder="Titre du post" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between mb-2">
                  <FormLabel className="text-base text-slate-700 dark:text-slate-300">
                    Description
                  </FormLabel>
                </div>
                <FormControl>
                  <SimpleMDE value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image_profile"
            render={({ field: { onChange, value } }) => (
              <Field>
                <FieldLabel htmlFor="image_profile">
                  Nouvelle image (optionnelle)
                </FieldLabel>
                {post.lien_image && (
                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-2">
                      Image actuelle :
                    </p>
                    <Image
                      src={post.lien_image}
                      alt="Image actuelle du post"
                      width={200}
                      height={150}
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
                <FileUploadProfil files={value} setFiles={onChange} />
                <FieldDescription className="text-xs mt-2">
                  5MB max (JPG, PNG, WEBP, HEIC, HEIF) - Laissez vide pour
                  conserver l&apos;ancienne image.
                </FieldDescription>
                <FormMessage />
              </Field>
            )}
          />

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={form.formState.isSubmitting}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Enregistrer
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
