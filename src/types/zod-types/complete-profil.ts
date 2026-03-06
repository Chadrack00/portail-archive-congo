import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

export const completeProfilSchema = z
  .object({
    postnom: z
      .string()
      .min(3, "Le postnom doit comporter au moins 3 caractères.")
      .max(30, "Le postnom ne peut pas dépasser 30 caractères."),
    prenom: z
      .string()
      .min(3, "Le prénom doit comporter au moins 3 caractères.")
      .max(30, "Le prénom ne peut pas dépasser 30 caractères."),
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
    numero_telephone: z
      .string()
      .min(1, "Le numéro de téléphone est requis.")
      .max(20, "Le numéro de téléphone ne peut pas dépasser 20 caractères.")
      .regex(
        /^\+?[0-9\s\-()]{7,20}$/,
        "Le numéro de téléphone n'est pas valide.",
      ),
    date_naissance: z.coerce
      .date({
        error: (issue) =>
          issue.input === undefined ? "Required" : "Invalid date",
      })
      .refine((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        const m = today.getMonth() - date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
          return age - 1 >= 12;
        }
        return age >= 12;
      }, "Vous devez avoir au moins 12 ans pour vous inscrire."),
    adresse_residence: z
      .string()
      .min(1, "L'adresse de résidence est requise.")
      .max(255, "L'adresse de résidence ne peut pas dépasser 255 caractères."),
    sexe: z.enum(["M", "F"], {
      error: "Veuillez sélectionner votre sexe.",
    }),
    type_profil: z.enum(["PATIENT", "MEDECIN"], {
      error: "Veuillez sélectionner le type de profil.",
    }),
    specialite: z.string().optional(),
    description: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type_profil === "MEDECIN") {
      if (!data.specialite || data.specialite.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["specialite"],
          message: "La spécialité est requise pour un médecin.",
        });
      }
      if (!data.description || data.description.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["description"],
          message: "La description est requise pour un médecin.",
        });
      }
    }
  });

export type CompleteProfilInput = z.input<typeof completeProfilSchema>;
export type CompleteProfilOutput = z.output<typeof completeProfilSchema>;
