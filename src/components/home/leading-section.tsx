import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LeadingSection() {
  return (
    <section className="px-6 lg:px-40 py-12 lg:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary w-fit">
              Santé Connectée
            </span>
            <h1 className="text-slate-900 dark:text-slate-50 text-4xl lg:text-6xl font-black leading-tight tracking-tight">
              Prenez soin de votre santé{" "}
              <span className="text-primary">en un clic</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
              Mise en relation instantanée avec les meilleurs spécialistes.
              Prenez rendez-vous, consultez en ligne et gérez votre suivi
              médical en toute simplicité.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform">
              <Link href="/overview">Découvrir</Link>
            </Button>
            <Button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <Link href="/overview">En savoir plus</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to from-primary/20 to-transparent z-10"></div>
            <Image
              alt="Image d'illustration"
              className="w-full h-full object-cover"
              data-alt="Modern medical professional using digital tablet in clean office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ItQVouV13MbAjlFwXE1Gy5S28MQtDiseJQ8FhoNAbgUWpNLR-VirUAdQuFZ7-hQp4qO9D2PtUKsZ7Lx_qUA-R8govPBmQrVJFLKwLXK1gJcbXupIMZ_fHpS6I6kTvvbkNVYtb5_o36A4sWOMa7kK66CM117JUNoQvfe_SeikwGcvchwcuMxWsLfSLg6cRKqdYQnjetwzefmqK8sNfQjJU24zdU0HiY-cHcB5sjZuaCBjHw0HfKMTgsn2jJ2Pf2-WIUWu0WNXsUk"
              loading="lazy"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
