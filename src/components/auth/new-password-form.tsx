"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { newPassword } from "@/lib/auth/new-password";
import { cn } from "@/lib/utils";
import {
  NewPasswordSchema,
  newPasswordSchema,
} from "@/types/zod-types/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon } from "lucide-react";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertTitle } from "../ui/alert";
import { Spinner } from "../ui/spinner";
import { DialogToCheckEmail } from "./dialog-to-check-link";
export default function NewPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) {
    redirect("/sign-in");
  }
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    onSubmit,
  } = HandleResetPassword({ token }, () => setOpen(true));

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <DialogToCheckEmail
        open={open}
        onOpenChange={setOpen}
        message="Votre mot de passe a été modifié avec succès"
        title="Mot de passe modifé"
        type="success"
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
              veillez saisir votre nouveau mot de passe
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="password">Nouveau mot de passe</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="********"
              required
              {...register("password")}
            />
            {errors.password && (
              <FieldDescription className="text-red-500 text-sm">
                {errors.password.message}
              </FieldDescription>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="confirm_password">
              Confirmer le mot de passe
            </FieldLabel>
            <Input
              id="confirm_password"
              type="password"
              placeholder="********"
              required
              {...register("confirm_password")}
            />
            {errors.confirm_password && (
              <FieldDescription className="text-red-500 text-sm">
                {errors.confirm_password.message}
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
                  {errors.root.credentials?.message ||
                    errors.root.warning?.message ||
                    errors.root.globalError?.message}
                </AlertTitle>
              </Alert>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : "Soumettre"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

function HandleResetPassword(
  { token }: { token: string },
  onSetOpen?: () => void,
) {
  const {
    handleSubmit,
    register,
    resetField,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
  });

  const onSubmit: SubmitHandler<NewPasswordSchema> = async (data) => {
    const { password, confirm_password } = data;
    const result = await newPassword({ password, confirm_password, token });

    if (result.status === 200) {
      console.log("result", result);
      if (onSetOpen) onSetOpen();
    } else {
      resetField("password");
      resetField("confirm_password");
      setError("root.global", {
        message: result.message,
      });
    }
  };

  return {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    onSubmit,
  };
}
