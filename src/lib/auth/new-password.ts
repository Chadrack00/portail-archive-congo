"use server";

import { newPasswordSchema } from "@/types/zod-types/auth-types";
import { auth } from "../auth";

export async function newPassword({
  password,
  confirm_password,
  token,
}: {
  password: string;
  confirm_password: string;
  token: string;
}) {
  const schema = await newPasswordSchema.safeParseAsync({
    password,
    confirm_password,
  });

  if (!schema.success) {
    return {
      status: 400,
      message:
        "Données invalides. Veuillez vérifier votre email et mot de passe.",
    };
  }
  let data;
  try {
    data = await auth.api.resetPassword({
      body: {
        newPassword: password, // required
        token, // required
      },
    });
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      message: "Un probleme du système, veillez réessayez plus tard",
    };
  }

  return {
    status: data.status ? 200 : 401,
    message: data.status
      ? "Félicitations votre mot  de passe a été modifié avec succès"
      : "Une erreur du serveur",
  };
}
