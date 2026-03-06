import NewPasswordForm from "@/components/auth/new-password-form";

export default function NewPasswordPage() {
  return (
    <div>
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <NewPasswordForm />
        </div>
      </div>
    </div>
  );
}