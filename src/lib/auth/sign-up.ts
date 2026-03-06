"use server";
import { signupSchema, SignupSchema } from "@/types/zod-types/auth-types";
import { auth } from "../auth";

export async function signUp(data: SignupSchema) {
  const schema = await signupSchema.safeParseAsync(data);

  if (!schema.success) {
    return {
      status: 400,
      message: "Veuillez vérifier les informations saisies.",
      role: "",
    };
  }
 
  let response;
  try {
    response = await auth.api.signUpEmail({
      body: {
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: `${process.env.NEXT_PUBLIC_APP}/verify-email?email=${data.email}`,
        rememberMe: true,
      },
      asResponse: true,
    });
    console.log("Response : ",response)
  } catch (err) {
    console.log("Error : " ,err);
    const error = err as {
      status?: number;
      statusCode?: number;
      message?: string;
    };
    const status = error?.status || error?.statusCode || 500;

    // Better Auth jette souvent 422 ou "USER_ALREADY_EXISTS" quand l'email est déjà pris
    let errorMessage =
      error?.message || "Une erreur est survenue lors de l'inscription.";
    if (
      errorMessage === "UNPROCESSABLE_ENTITY" ||
      status === 422 ||
      errorMessage === "USER_ALREADY_EXISTS"
    ) {
      errorMessage =
        "Un compte existe déjà avec cette adresse email ou les informations sont invalides.";
    }

    return {
      status,
      message: errorMessage,
      role: "",
    };
  }

  let message = "";
  let role = "user";

  if (response.status === 400) {
    message = "L'adresse email est déjà utilisée.";
  } else if (!response.ok) {
    message = response.statusText || "Erreur lors de la création du compte";
  }

  if (response.ok) {
    const responseData = await response.json();
    role = responseData.user?.role || "user";
  }

  return {
    status: response.status,
    message: message,
    role: role,
  };
}
