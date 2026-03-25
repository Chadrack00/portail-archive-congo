import z from "zod";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];
export const createPostSchema = z.object({
  image_profile: z
    .any()
    .refine((files) => {
      if (!files) return false;
      // On vérifie si on est sur le navigateur pour tester FileList
      if (typeof window !== "undefined") {
        if (files instanceof FileList) return files.length > 0;
      }
      // Côté serveur ou si c'est déjà un tableau/objet
      return (
        files instanceof File ||
        (Array.isArray(files) && files.length > 0) ||
        (typeof files === "object" && files.size > 0)
      );
    }, "Une image de profil est requise.")
    .transform((files) => {
      if (typeof window !== "undefined" && files instanceof FileList) {
        return files[0];
      }
      if (Array.isArray(files)) return files[0];
      return files;
    })
    // On ajoute un contrôle de sécurité pour la suite
    .refine((file) => !!file, "Fichier invalide.")
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `L'image ne doit pas dépasser 5MB.`,
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Seuls les formats .jpg, .jpeg, .png et .webp sont acceptés.",
    ),
  title: z
    .string("Le titre est obligatoire")
    .max(100, "Le titre ne doit pas dépasser le 100 caractères"),
  description: z.string("La description est obligatoire"),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;

export const editPostSchema = z.object({
  image_profile: z
    .any()
    .optional()
    .transform((files) => {
      if (!files) return undefined;
      if (typeof window !== "undefined" && files instanceof FileList) {
        return files[0];
      }
      if (Array.isArray(files)) return files[0];
      return files;
    })
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      `L'image ne doit pas dépasser 5MB.`,
    )
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Seuls les formats .jpg, .jpeg, .png et .webp sont acceptés.",
    ),
  title: z
    .string("Le titre est obligatoire")
    .max(100, "Le titre ne doit pas dépasser le 100 caractères"),
  description: z.string("La description est obligatoire"),
});

export type EditPostSchema = z.infer<typeof editPostSchema>;

export const takeRdvSchema = z.object({
  motif: z
    .string()
    .min(10, "Le motif doit contenir au moins 10 caractères")
    .max(500, "Le motif est trop long"),
  date_rdv: z
    .date({
      error: "Date requise",
    })
    .refine((date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, "La date du rendez-vous ne peut pas être dans le passé"),
});

export type TakeRdvSchema = z.infer<typeof takeRdvSchema>;
