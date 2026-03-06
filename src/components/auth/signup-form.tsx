"use client";
// import { PhoneInput } from "@/components/auth/signup/phone-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { authClient } from "@/lib/auth-client";
import { signUp } from "@/lib/auth/sign-up";
import { cn } from "@/lib/utils";
import { SignupSchema, signupSchema } from "@/types/zod-types/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertTitle } from "../ui/alert";
import { GoogleIcon } from "../ui/google-icon";
import { Spinner } from "../ui/spinner";
import { DialogToCheckEmail } from "./dialog-to-check-link";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const {
    register,
    handleSubmit,
    // control,
    formState: { isSubmitting, errors },
    onSubmit,
  } = HandleSignupForm(() => setShowSuccessDialog(true));

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    await SignUpGoogle();
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Créer votre compte</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Entrez vos informations pour créer un votre compte
                </p>
              </div>

              {/* Email field */}
              <Field className="flex flex-col gap-1">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <div className="flex flex-col gap-1 max-w-full">
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className={
                      errors.email
                        ? "border-red-500 focus-visible:ring-red-500"
                        : ""
                    }
                    {...register("email")}
                  />
                  {errors.email && (
                    <FieldDescription className="text-red-500 text-sm">
                      {errors.email.message}
                    </FieldDescription>
                  )}
                </div>
              </Field>

              {/* First name and number fields */}
              <Field>
                <Field className="grid grid-cols-1 gap-4">
                  <Field className="flex flex-col gap-1">
                    <FieldLabel htmlFor="nom">Nom</FieldLabel>
                    <Input
                      id="nom"
                      type="text"
                      required
                      className={
                        errors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : ""
                      }
                      {...register("name")}
                    />
                    {errors.name && (
                      <FieldDescription className="text-red-500 text-sm">
                        {errors.name.message}
                      </FieldDescription>
                    )}
                  </Field>
                  {/* <Field className="flex flex-col gap-1">
                    <FieldLabel htmlFor="numero">Numéro</FieldLabel>
                    <Controller
                      control={control}
                      name="phone"
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          className={
                            errors.phone
                              ? "border-red-500 focus-within:ring-red-500"
                              : ""
                          }
                        />
                      )}
                    />
                    {errors.phone && (
                      <FieldDescription className="text-red-500 text-sm">
                        {errors.phone.message}
                      </FieldDescription>
                    )}
                  </Field> */}
                </Field>
              </Field>

              {/* Password and confirm password fields */}
              <Field>
                <Field className="grid grid-cols-1 gap-1">
                  <div className="max-w-full flex justify-between gap-4 ">
                    <Field>
                      <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
                      <Input
                        id="password"
                        type="password"
                        required
                        className={
                          errors.password
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                        {...register("password")}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="confirm-password">
                        Confirmer le mot de passe
                      </FieldLabel>
                      <Input
                        id="confirm-password"
                        type="password"
                        required
                        className={
                          errors.confirm_password
                            ? "border-red-500 focus-visible:ring-red-500"
                            : ""
                        }
                        {...register("confirm_password")}
                      />
                    </Field>
                  </div>
                  <div className="max-w-full">
                    {(errors.confirm_password?.message ||
                      errors?.password?.message) && (
                      <FieldDescription className="text-red-500 text-sm">
                        {errors.confirm_password?.message ||
                          errors?.password?.message}
                      </FieldDescription>
                    )}
                  </div>
                </Field>
              </Field>

              {/* Sex Fields */}
              {/* <Field className="m-auto flex flex-col gap-1">
                <FieldLabel htmlFor="sex">Sexe</FieldLabel>
                <Controller
                  control={control}
                  name="sexe"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        className={cn(
                          "w-full",
                          errors.sexe && "border-red-500 focus:ring-red-500",
                        )}
                      >
                        <SelectValue placeholder="Votre genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>
                            Veillez selectioner votre genre
                          </SelectLabel>
                          <SelectItem value="M">Masculin</SelectItem>
                          <SelectItem value="F">Féminin</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.sexe && (
                  <FieldDescription className="text-red-500">
                    {errors.sexe.message}
                  </FieldDescription>
                )}
              </Field> */}

              {/* Alert Message */}
              {errors.root && (
                <Field>
                  <Alert className="max-w bg-transparent border-none flex gap-5 items-center p-0 m-0">
                    <AlertTriangleIcon color="red" size={50} />
                    <AlertTitle className="text-red-500 flex items-center">
                      {errors.root.serverError?.message ||
                        "Une erreur est survenue"}
                    </AlertTitle>
                  </Alert>
                </Field>
              )}

              {/* Submit button */}
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Spinner /> : "Créer un compte"}
                </Button>
              </Field>

              {/* Or continue with Google */}
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Ou inscrivez-vous avec
              </FieldSeparator>
              <Button
                className="bg-transparent text-black border border-black hover:text-white"
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading || isSubmitting}
              >
                {isGoogleLoading ? <Spinner /> : <GoogleIcon />}
                S&apos;inscrire avec Google
              </Button>
              <FieldDescription className="text-center">
                Aviez-vous déjà un compte{" "}
                <Link href="/sign-in">Connectez-vous</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              width={100}
              height={100}
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        En continuant, vous acceptez nos{" "}
        <Link href="#">Conditions d&apos;utilisation</Link> et notre{" "}
        <Link href="https://inaco.cd/politique-confidentialite">
          Politique de confidentialité
        </Link>
      </FieldDescription>
      <Suspense fallback={null}>
        <DialogToCheckEmail
          open={showSuccessDialog}
          onOpenChange={setShowSuccessDialog}
          type="info"
          title="Consulter votre boite mail"
          message="Veuillez consulter votre boite mail pour activer votre compte"
          onRedirect={() => {
            redirect("/sign-in");
          }}
        />
      </Suspense>
    </div>
  );
}

function HandleSignupForm(onSuccessCallback?: () => void) {
  const {
    register,
    handleSubmit,
    setError,
    resetField,
    control,
    formState: { isSubmitting, errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupSchema> = async (data) => {
    const result = await signUp(data);
    console.log(result);

    if (result.status === 200 || result.status === 201) {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      resetField("password");
      resetField("confirm_password");
      setError("root.serverError", {
        message: result.message,
      });
    }
  };

  return {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    onSubmit,
  };
}

const SignUpGoogle = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: `${process.env.NEXT_PUBLIC_APP}/complete-profile`,
  });
};
