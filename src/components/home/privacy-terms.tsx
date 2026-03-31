"use client";
import { Cookie, Database, FingerprintPattern, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function PrivacyTermsClient() {
  const [activeNav, setActiveNav] = useState<string>("collecte");
  const navs: { id: string; icon: React.ReactNode; label: string }[] = [
    {
      id: "collecte",
      icon: <Database size={15} />,
      label: "Collecte des données",
    },
    {
      id: "utilisation",
      icon: <FingerprintPattern size={15} />,
      label: "Utilisation des données",
    },
    {
      id: "cookies",
      icon: <Cookie size={15} />,
      label: "Cookies",
    },
    {
      id: "responsabilites",
      icon: <Shield size={15} />,
      label: "Responsabilités",
    },
  ];
  return (
    <nav className="flex flex-col gap-1">
      {navs.map((nav) => (
        <Link
          key={nav.id}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg sidebar-active font-medium text-sm ${activeNav === nav.id ? "bg-primary text-white" : ""}`}
          href={`#${nav.id}`}
          onClick={() => setActiveNav(nav.id)}
        >
          <span className="material-symbols-outlined text-[20px]">
            {nav.icon}
          </span>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}
