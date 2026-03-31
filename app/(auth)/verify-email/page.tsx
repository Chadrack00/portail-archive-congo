"use client";
import { DialogToCheckEmail } from "@/components/auth/dialog-to-check-link";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Page({searchParams}: {searchParams: Promise<{email: string, error: string}>}) {
  const router = useRouter();

  const {error} = use(searchParams);
  const {email} = use(searchParams);

  const [showSuccessDialog, setShowSuccessDialog] = useState(
    error === "token_expired",
  );

  useEffect(() => {
    if (!email) {
      redirect("/sign-in");
    }


    if(error){
      console.log("Erreur inconnu dans /verify-email", error)
    }else{
      redirect(`${process.env.NEXT_PUBLIC_APP}/complete-profile`)
    }
  }, [email, error, router]);

  if (!email) return null;

  return (
    <DialogToCheckEmail
      open={showSuccessDialog}
      onOpenChange={setShowSuccessDialog}
      type="mail"
      title="Consulter votre boite mail"
      message="Appuyez sur le bouton ci-dessous pour renvoyer le mail de vérification"
      onRedirect={async () => {
        await resendEmailVerification({ email: email });
      }}
    />
  );
}

const resendEmailVerification = async ({ email }: { email: string }) => {
  await authClient.sendVerificationEmail({
    email: email,
    callbackURL: `/verify-email?email=${email}`,
  });
};
