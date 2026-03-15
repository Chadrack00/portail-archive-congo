import { Flag } from "lucide-react";
import FormReport from "./form-report";
export default function ReportUser({id_medecin}: {id_medecin: string}) {
    return (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center size-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
              <span className="material-symbols-outlined"><Flag size={15}/></span>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">
                Signaler ce profil
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Un problème avec les informations affichées ? Dites-le nous.
              </p>
            </div>
          </div>
          <FormReport id_medecin={id_medecin}/>
        </div>
    );
}