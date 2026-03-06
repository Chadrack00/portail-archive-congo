import { z } from "zod";

// Sign-in schema
export const loginSchema = z.object({
  email: z
    .string("Veuillez entrer votre email")
    .email("Veuillez entrer un email valide"),
  password: z.string("Veuillez entrer votre mot de passe").min(1),
});

export type LoginSchema = z.infer<typeof loginSchema>;

// Sign-up schema
export const signupSchema = z
  .object({
    name: z
      .string("Ce champ est obligatoire")
      .min(3, "Le nom doit comporter au moins 3 caractères"),
    email: z
      .string("Ce champ est obligatoire")
      .email("Veuillez entrer un email valide"),
    // phone: z
    //   .string("Ce champ est obligatoire")
    //   .regex(
    //     /^\+?[1-9]\d{1,14}$/,
    //     "Numéro de téléphone invalide (format international requis)",
    //   ),
    password: z
      .string("Ce champ est obligatoire")
      .min(8, "Le mot de passe doit comporter au moins 8 caractères")
      .regex(/[A-Za-z]/, "Le mot de passe doit contenir au moins une lettre")
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
      .regex(
        /[^A-Za-z0-9]/,
        "Le mot de passe doit contenir au moins un caractère spécial",
      ),
    confirm_password: z.string(),
    // sexe: z.enum(["M", "F"]).optional(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirm_password"], // Chemin où l'erreur sera attachée
  });

export type SignupSchema = z.infer<typeof signupSchema>;

// /reset-password
export const resetPasswordSchema = z.object({
  email: z
    .string("Veuillez entrer votre email")
    .email("Veuillez entrer un email valide"),
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

// /new-password
export const newPasswordSchema = z
  .object({
    password: z
      .string("Ce champ est obligatoire")
      .min(8, "Le mot de passe doit comporter au moins 8 caractères")
      .regex(/[A-Za-z]/, "Le mot de passe doit contenir au moins une lettre")
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
      .regex(
        /[^A-Za-z0-9]/,
        "Le mot de passe doit contenir au moins un caractère spécial",
      ),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirm_password"], // Chemin où l'erreur sera attachée
  });

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;
