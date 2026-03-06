"use server"
import { resetPasswordSchema } from "@/types/zod-types/auth-types";
import { auth } from "../auth";
import { prisma } from "../prisma";

export async function requestPasswordReset({ email }: { email: string }) {
  const schema = await resetPasswordSchema.safeParseAsync({ email });

  if (!schema.success) {
    return {
      status: 400,
      message:
        "Données invalides. Veuillez vérifier votre email et mot de passe.",
    };
  }

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (!userExists) {
    // Si l'utilisateur n'existe pas, on renvoie une erreur explicite
    return {
      status: 401,
      message: "Cette adresse email n'est associée à aucun compte.",
    };
  }

const data = await auth.api.requestPasswordReset({
    body: {
        email: email, // required
        redirectTo: `${process.env.NEXT_PUBLIC_APP}/new-password`,
    },
    asResponse: true,
});
  console.log(data);
  console.log("Erreur 12");

  // console.log(err);
  return {
    status: data.ok ? 200 : 401,
    message: data.statusText,
  };

  // return {
  //   status: data.status ? 200 : 401,
  //   message: data.message,
  // };
}
