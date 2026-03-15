"use client"

import {  Calendar, Cookie, Database, FingerprintPattern, Shield } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import { useState } from "react";
export default function PrivacyTerms() {
  const [activeNav, setActiveNav] = useState<string>("collecte");
  const navs : {id: string ; icon : React.ReactNode;label : string}[] = [{
    id:"collecte",
    icon: <Database size={15}/>,
    label: "Collecte des données"
  },{
    id: "utilisation",
    icon: <FingerprintPattern size={15}/>,
    label: "Utilisation des données"
  },{
    id: "cookies",
    icon: <Cookie size={15}/>,
    label: "Cookies"
  },{
    id:"responsabilites",
    icon: <Shield size={15}/>,
    label: "Responsabilités"
  }] 
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      <div className="min-h-screen flex flex-col">
        {/* <!-- Top Navigation Bar --> */}
        <Header/>
        {/* <!-- Main Content Area --> */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* <!-- Sidebar Navigation --> */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="sticky top-28 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 px-3">
                    Navigation légale
                  </h3>
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
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Besoin d&apos;aide concernant vos droits ? Contactez notre
                    délégué à la protection des données (DPO).
                  </p>
                  <Link
                    className="inline-block mt-3 text-sm font-semibold text-primary hover:underline"
                    href="#"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </aside>
            {/* <!-- Legal Content --> */}
            <article className="flex-1 max-w-3xl bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <header className="mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
                <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
                  Confidentialité et Règles
                </h2>
                <p className="text-slate-500 font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    <Calendar size={15} color="#137fec"/>
                  </span>
                  <span>Dernière mise à jour : 24 Mai 2024</span>
                </p>
              </header>
              <div className="space-y-12 leading-relaxed text-slate-700 dark:text-slate-300">
                {/* <!-- Section 1 --> */}
                <section id="collecte">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      1
                    </span>
                    Collecte des données personnelles
                  </h3>
                  <div className="space-y-4">
                    <p>
                      Nous collectons les informations nécessaires à la gestion
                      de vos rendez-vous médicaux, notamment votre nom, prénom,
                      adresse e-mail, numéro de téléphone et historique de
                      navigation sur la plateforme pour améliorer nos services.
                    </p>
                    <p>
                      Les données de santé que vous partagez sont traitées avec
                      le plus haut niveau de sécurité, conformément aux
                      réglementations locales et européennes (RGPD).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-primary">
                      <li>
                        Identifiants de compte et informations de contact.
                      </li>
                      <li>
                        Historique des rendez-vous et des praticiens consultés.
                      </li>
                      <li>
                        Informations techniques (adresse IP, type de
                        navigateur).
                      </li>
                    </ul>
                  </div>
                </section>
                {/* <!-- Section 2 --> */}
                <section id="utilisation">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      2
                    </span>
                    Utilisation des données
                  </h3>
                  <div className="space-y-4">
                    <p>
                      Vos données sont exclusivement utilisées pour faciliter la
                      mise en relation avec les professionnels de santé, assurer
                      le suivi de vos soins et vous notifier de vos rappels de
                      rendez-vous.
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        SantéConnect ne vendra jamais vos données personnelles
                        ou médicales à des tiers à des fins marketing.
                      </p>
                    </div>
                    <p>
                      Nous pouvons utiliser des données anonymisées pour
                      réaliser des études statistiques sur l&apos;accès aux
                      soins, sans jamais identifier d&apos;utilisateurs
                      individuels.
                    </p>
                  </div>
                </section>
                {/* <!-- Section 3 --> */}
                <section id="cookies">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      3
                    </span>
                    Gestion des Cookies
                  </h3>
                  <p className="mb-4">
                    Notre plateforme utilise des cookies pour maintenir votre
                    session active, mémoriser vos préférences et analyser le
                    trafic de manière anonyme.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                        Cookies Essentiels
                      </p>
                      <p className="text-xs text-slate-500">
                        Nécessaires au fonctionnement de la prise de
                        rendez-vous.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                        Cookies Analytiques
                      </p>
                      <p className="text-xs text-slate-500">
                        Nous aident à comprendre l&apos;usage de la plateforme.
                      </p>
                    </div>
                  </div>
                </section>
                {/* <!-- Section 4 --> */}
                <section id="responsabilites">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                      4
                    </span>
                    Responsabilités
                  </h3>
                  <div className="space-y-4">
                    <p>
                      SantéConnect agit en tant qu&apos;intermédiaire technique.
                      Les diagnostics et conseils médicaux relèvent de la
                      responsabilité exclusive des professionnels de santé
                      inscrits sur la plateforme.
                    </p>
                    <p>
                      L&apos;utilisateur s&apos;engage à fournir des
                      informations exactes lors de sa prise de rendez-vous et à
                      honorer ses consultations ou les annuler dans les délais
                      impartis par le praticien.
                    </p>
                  </div>
                </section>
              </div>
              <footer className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-xs text-slate-400">
                  © 2024 SantéConnect. Tous droits réservés.
                </p>
              </footer>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
