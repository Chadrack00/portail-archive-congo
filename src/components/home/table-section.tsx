import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";
export default function TableSection() {
  return (
    <section className="px-6 lg:px-40 py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3">
          <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold leading-tight mb-6">
            Un outil puissant pour les praticiens
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Gérez votre patientèle, vos rendez-vous et votre facturation sur une
            seule et même plateforme intuitive.
          </p>
          <Button className="bg-primary text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            Espace Praticien
          </Button>
        </div>
        <div className="lg:w-2/3 w-full overflow-x-auto">
          <div className="min-w-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
              <h4 className="font-bold text-slate-900 dark:text-slate-100">
                Planning du jour
              </h4>
              <div className="flex gap-2">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                  12 RDV aujourd&apos;hui
                </span>
              </div>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold">
                <tr>
                  <th className="px-6 py-4">Heure</th>
                  <th className="px-6 py-4">Patient</th>
                  <th className="px-6 py-4">Motif</th>
                  <th className="px-6 py-4">Statut</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold">09:00</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                        AM
                      </div>
                      <span className="text-sm font-medium">Alice Martin</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">Consultation annuelle</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      TERMINE
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center">
                    <Ellipsis />
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold">09:30</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                        TB
                      </div>
                      <span className="text-sm font-medium">
                        Thomas Bernard
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">Suivi cardiologie</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary">
                      EN COURS
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center">
                    <span>
                      <Ellipsis />
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold">10:00</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                        SL
                      </div>
                      <span className="text-sm font-medium">Sophie Leroy</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">Première visite</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-500">
                      EN ATTENTE
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center">
                    <Ellipsis />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
