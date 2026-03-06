"use server";
import { loginSchema } from "@/types/zod-types/auth-types";
import { auth } from "../auth";
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const schema = await loginSchema.safeParseAsync({ email, password });

  if (!schema.success) {
    return {
      status: 400,
      message:
        "Données invalides. Veuillez vérifier votre email et mot de passe.",
      role: "",
    };
  }
  let response;
  try {
    response = await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
      asResponse: true,
    });
  } catch (err) {
    console.log(err)
    const error = err as {
      status?: number | string;
      statusCode?: number;
      message?: string;
    };
    return {
      status: error?.status || error?.statusCode || 401,
      message:
        error?.message || "Une erreur est survenue lors de la connexion.",
      role: "",
    };
  }

  let message = "";
  let role = "";

  if (response.status === 401) {
    message = "Votre email ou votre mot de passe est incorrect";
  } else if (response.status === 403) {
    message = response.statusText
  }

  if (response.ok) {
    const data = await response.json();
    role = data.user.role;
  }

  console.log(response);
  return {
    status: response.status,
    code: response.type as string,
    message: message ?? response.statusText,
    role: role,
  };
}

