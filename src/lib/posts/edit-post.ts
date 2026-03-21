"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { editPostSchema } from "@/types/zod-types/post-types";
import { mkdir, unlink, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { join } from "path";

export async function deletePost(postId: string, userSlug: string) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return { success: false, message: "Non autorisé" };
    }

    const post = await prisma.posts.findUnique({
      where: {
        id_post: postId,
      },
      select: { lien_image: true },
    });

    if (post?.lien_image) {
      // url is something like "/uploads/posts/1234.jpg"
      // path is join(process.cwd(), "public", post.lien_image)
      const imagePath = join(process.cwd(), "public", post.lien_image);
      try {
        await unlink(imagePath);
      } catch (err) {
        console.error(
          "Failed to delete unused image during post deletion",
          err,
        );
      }
    }

    await prisma.posts.delete({
      where: {
        id_post: postId,
      },
    });

    revalidatePath(`/${userSlug}/posts`);
    return { success: true, message: "Post supprimé avec succès." };
  } catch (error) {
    console.error("Delete post error:", error);
    return { success: false, message: "Erreur lors de la suppression." };
  }
}

export async function editPost(
  formData: FormData,
  postId: string,
  userSlug: string,
) {
  const data = Object.fromEntries(formData.entries());

  const parsed = editPostSchema.safeParse({
    title: data.title,
    description: data.description,
    image_profile: formData.get("image_profile"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Veuillez vérifier les champs du formulaire.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return { success: false, message: "Non autorisé" };
    }

    let imageUrl = undefined;

    // Traitement de l'image
    const file = parsed.data.image_profile as File;
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadDir = join(process.cwd(), "public", "uploads", "posts");
      await mkdir(uploadDir, { recursive: true });
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const extension = file.name.split(".").pop() || "jpg";
      const filename = `${uniqueSuffix}.${extension}`;
      const destPath = join(uploadDir, filename);
      await writeFile(destPath, buffer);
      imageUrl = `/uploads/posts/${filename}`;

      // DELETE old image
      const oldPost = await prisma.posts.findUnique({
        where: { id_post: postId },
        select: { lien_image: true },
      });

      if (oldPost?.lien_image) {
        const oldImagePath = join(process.cwd(), "public", oldPost.lien_image);
        try {
          await unlink(oldImagePath);
        } catch (err) {
          console.error("Failed to delete old replaced image", err);
        }
      }
    }

    const updateData: Record<string, string> = {
      titre: parsed.data.title,
      description: parsed.data.description,
      slug:
        parsed.data.title.toLowerCase().replaceAll(" ", "-") +
        "-" +
        postId.substring(0, 4),
    };

    if (imageUrl) {
      updateData.lien_image = imageUrl;
    }

    await prisma.posts.update({
      where: { id_post: postId },
      data: updateData,
    });

    revalidatePath(`/${userSlug}/posts`);
    return { success: true, message: "Post modifié avec succès." };
  } catch (error) {
    console.error("Edit post error:", error);
    return { success: false, message: "Erreur lors de la modification." };
  }
}
