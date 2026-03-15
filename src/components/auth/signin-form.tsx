"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { GoogleIcon } from "@/components/ui/google-icon";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { login } from "@/lib/auth/login";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/types/zod-types/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertTitle } from "../ui/alert";
import { Spinner } from "../ui/spinner";
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    onSubmit,
  } = HandleLoginForm();

  const handleGoogleSignIn = async () => {
    await signInGoogle({ setIsGoogleLoading });
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Connectez-vous</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Veillez entrer vos identifiants pour vous connecter
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            className={
              errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
            }
            {...register("email")}
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
            <Link
              href="/reset-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            placeholder="********"
            className={
              errors.password ? "border-red-500 focus-visible:ring-red-500" : ""
            }
            {...register("password")}
          />
        </Field>

        <Field>
          {/* alerte message */}
          {errors.root && (
            <Alert className="max-w bg-transparent border-none flex gap-5 items-center p-0 m-0">
              <AlertTriangleIcon
                color={errors.root.credentials ? "red" : "yellow"}
                size={50}
              />
              <AlertTitle
                className={`${errors.root.credentials ? "text-red-500" : "text-yellow-500"} flex items-center`}
              >
                {errors.root.credentials?.message ||
                  errors.root.warning?.message ||
                  errors.root.globalError?.message}
              </AlertTitle>
            </Alert>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : "Se connecter"}
          </Button>
        </Field>
        <FieldSeparator>Ou continuez avec</FieldSeparator>
        <Field>
          <Button
            variant="outline"
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading || isSubmitting}
          >
            {isGoogleLoading ? <Spinner /> : <GoogleIcon />}
            Se connecter avec Google
          </Button>
          <FieldDescription className="text-center">
            Vous n&apos;avez pas de compte ?{" "}
            <Link href="/sign-up" className="underline underline-offset-4">
              Inscrivez-vous
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}

function HandleLoginForm() {
  type Inputs = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await login(data);
    console.log(result);
    if (result.status === 401) {
      resetField("password");
      setError("root.credentials", {
        message: result.message,
      });
    } else if (result.status === 200) {
      console.log(result.role);
      redirect("/");
    } else if (result.status === 403 || result.status === 401) {
      setError("root.warning", {
        message: result.message,
      });
    } else {
      setError("root.globalError", {
        message: "Une erreur est survenue, veuillez réessayer plus tard",
      });
    }
  };
  return {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    onSubmit,
  };
}

const signInGoogle = async ({
  setIsGoogleLoading,
}: {
  setIsGoogleLoading: (value: boolean) => void;
}) => {
  setIsGoogleLoading(true);
  const response = await authClient.signIn.social({
    provider: "google",
    callbackURL: `${process.env.NEXT_PUBLIC_APP}/`,
  });
  console.log(response);
  setIsGoogleLoading(false);
};
