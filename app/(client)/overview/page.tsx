import Medecins from "@/components/overview/medecins";
import Posts from "@/components/overview/posts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      <div className="relative flex min-h-screen flex-col">
        {/* <!-- Top Navigation Bar --> */}

        <main className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-20 py-8">
          {/* <!-- Hero Header --> */}
          <div className="mb-5">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
              Explorer des Médecins
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              Trouvez le spécialiste qui vous convient le mieux parmi nos
              milliers de praticiens certifiés et prenez rendez-vous en quelques
              clics.
            </p>
          </div>
          {/* <!-- Main Grid Layout --> */}
          <div className="grid grid-cols-1 gap-8">
            <Suspense
              fallback={
                <div className="h-[400px] flex items-center justify-center text-slate-500 font-medium">
                  Chargement des praticiens...
                </div>
              }
            >
              <Medecins />
            </Suspense>
          </div>

          {/* <!-- Articles and Health Tips Section --> */}
          <Suspense
            fallback={
              <div className="h-[400px] flex items-center justify-center text-slate-500 font-medium mt-20">
                Chargement des articles...
              </div>
            }
          >
            <Posts />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
