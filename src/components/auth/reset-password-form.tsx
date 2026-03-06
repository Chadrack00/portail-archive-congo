"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "@/types/zod-types/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertTitle } from "../ui/alert";
import { Spinner } from "../ui/spinner";
import { DialogToCheckEmail } from "./dialog-to-check-link";
import { requestPasswordReset } from "@/lib/auth/reset-password";
export default function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showDialog, setShowDialog] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    onSubmit,
  } = HandleResetPassword(() => setShowDialog(true));
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <DialogToCheckEmail
        open={showDialog}
        onOpenChange={setShowDialog}
        message="Un email vous a été envoyé avec un lien de réinitialisation"
        title="Email envoyé"
        type="mail"
        onRedirect={() => {
          redirect("/sign-in");
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-18 items-center justify-center rounded-md">
                <Image
                  width={100}
                  height={100}
                  src="/icons/archive-congo.png"
                  alt="Image"
                  className=""
                />
              </div>
              <span className="sr-only">INACO</span>
            </a>
            <h1 className="text-xl font-bold">Modification de mot de passe</h1>
            <FieldDescription>
              Entrez votre email pour recevoir un lien de réinitialisation
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              required
            />
            {errors.email && (
              <FieldDescription className="text-red-500 text-sm">
                {errors.email.message}
              </FieldDescription>
            )}
          </Field>
          <Field>
            {errors.root && (
              <Alert className="max-w bg-transparent border-none flex gap-5 items-center p-0 m-0">
                <AlertTriangleIcon
                  color={errors.root.credentials ? "red" : "yellow"}
                  size={50}
                />
                <AlertTitle
                  className={`${errors.root.credentials ? "text-red-500" : "text-yellow-500"} flex items-center`}
                >
                  {errors.root.global?.message}
                </AlertTitle>
              </Alert>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : "Soumettre"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        En continuant, vous acceptez nos{" "}
        <Link href="#">Conditions d&apos;utilisation</Link> et notre{" "}
        <Link href="https://inaco.cd/politique-confidentialite">
          Politique de confidentialité
        </Link>
        .
      </FieldDescription>
    </div>
  );
}

function HandleResetPassword(onSubmitted?: () => void) {
  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { isSubmitting, errors, isSubmitted },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordSchema> = async (data) => {
    const email = data.email;
    const result = await requestPasswordReset({ email });
    console.log(result);
    if (result.status === 200) {
      if (onSubmitted) onSubmitted();
    } else {
      resetField("email");
      setError("root.global", {
        message: result.message,
      });
    }
  };
  return {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitted },
    onSubmit,
  };
}
