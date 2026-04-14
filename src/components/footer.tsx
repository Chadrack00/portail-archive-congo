"use client";
import { BriefcaseMedical, MonitorCog, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 rounded-xl p-2 material-symbols-outlined text-white text-2xl">
              <BriefcaseMedical />
            </span>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
              SantéConnect
            </h2>
          </div>
          <p className="text-slate-500 text-sm">
            La santé simplifiée, où que vous soyez. Rejoignez la révolution
            médicale numérique.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Pour les patients</h4>
          <ul className="text-sm text-slate-500 space-y-2">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/overview"
              >
                Prendre RDV
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/overview"
              >
                Blog Santé
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Pour les médecins</h4>
          <ul className="text-sm text-slate-500 space-y-2">
            <li>
              <Link
                className="hover:text-primary transition-colors"
                href="/sign-up"
              >
                S&apos;inscrire
              </Link>
            </li>
            
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Préférences</h4>
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
            <Button
              className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-transparent shadow-sm dark:shadow-none text-slate-600 dark:text-slate-400 hover:text-primary transition-all"
              onClick={() => (document.documentElement.className = "light")}
            >
              <span className="material-symbols-outlined text-xl">
                <Sun />
              </span>
            </Button>
            <Button
              className="size-8 flex items-center justify-center rounded-md bg-transparent text-slate-600 dark:text-slate-400 hover:text-primary transition-all"
              onClick={() => (document.documentElement.className = "")}
            >
              <span className="material-symbols-outlined text-xl">
                <MonitorCog />
              </span>
            </Button>
            <Button
              className="size-8 flex items-center justify-center rounded-md bg-transparent dark:bg-slate-700 shadow-none dark:shadow-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-all"
              onClick={() => (document.documentElement.className = "dark")}
            >
              <span className="material-symbols-outlined text-xl">
                <Moon />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2026 SanteConnect. Tous droits réservés.</p>
        <div className="flex gap-6">
          <Link className="hover:text-primary transition-colors" href="/privacy-terms">
            Mentions légales
          </Link>
          <Link className="hover:text-primary transition-colors" href="/privacy-terms">
            Politique de confidentialité
          </Link>
          <Link className="hover:text-primary transition-colors" href="/privacy-terms">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
