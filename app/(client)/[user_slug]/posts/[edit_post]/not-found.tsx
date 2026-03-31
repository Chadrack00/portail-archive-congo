import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
      <ShieldAlert className="w-16 h-16 text-slate-400 mb-6" />
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
        Post Introuvable
      </h2>
      <p className="text-slate-500 mb-8 max-w-md">
        Le post que vous cherchez n&apos;existe pas, a été supprimé ou vous
        n&apos;avez pas les droits de le modifier.
      </p>
      <Link
        href="/home"
        className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
