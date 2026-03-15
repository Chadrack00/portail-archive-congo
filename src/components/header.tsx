import { BriefcaseMedical } from "lucide-react";
import Link from "next/link";
import { UserProfilAvatar } from "./home/avatar-profil";
import { Suspense } from "react";
export default function Header() {
  const navs = [
    {
      name: "Accueil",
      href: "/",
    },
    {
      name: "Aide",
      href: "/help",
    },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className=" p-1.5 rounded-lg flex items-center justify-center">
              <span className="bg-blue-600 rounded-xl p-2 material-symbols-outlined text-white text-2xl">
                <BriefcaseMedical />
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              SantéConnect
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navs.map((nav) => (
              <Link
                key={nav.name}
                className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-400"
                href={nav.href}
              >
                {nav.name}
              </Link>
            ))}
            <Suspense>
              <UserProfilAvatar />
            </Suspense>
          </nav>
          <button className="md:hidden p-2 rounded-md text-slate-600">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
