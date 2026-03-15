import { BadgeCheck, CalendarClock } from "lucide-react";
import Image from "next/image";
type UserProps = {
  nom: string;
  prenom: string;
  image?: string;
  specialite?: string;
  adresse_residence: string;
  description?: string;
};

export default function HeaderProfil({
  isDoctor,
  user,
  isOwner,
}: {
  isDoctor: boolean;
  user: UserProps;
  isOwner: boolean,
}) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
      <div
        className="h-32 bg-linear-to-r from-primary to-blue-400"
        data-alt="Bannière dégradée bleue professionnelle"
      ></div>
      <div className="px-8 pb-8">
        <div className="relative flex flex-col md:flex-row md:items-end gap-6 -mt-12">
          <div className="size-32 rounded-2xl border-4 border-white dark:border-slate-900 bg-white dark:bg-slate-800 overflow-hidden shadow-lg">
            <Image
              alt={`${user?.nom} ${user?.prenom}`}
              className="w-full h-full object-cover"
              data-alt="Gros plan portrait du Docteur Jean Dupont"
              src={user?.image ?? ""}
              loading="lazy"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {user?.prenom} {user?.nom}
                <span
                  className="material-symbols-outlined text-primary text-xl"
                  title="Profil vérifié"
                >
                  <BadgeCheck />
                </span>
              </h1>
              <p className="text-primary font-semibold">
                {user?.specialite} * {user?.adresse_residence}
              </p>
              {user?.description && <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mt-1">
                {user?.description}
              </p>}
            </div>
            {!isDoctor && !isOwner && (
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold shadow-md shadow-primary/20 flex items-center gap-2 transition-all">
                <span className="material-symbols-outlined text-xl">
                  <CalendarClock />
                </span>
                Prendre rendez-vous
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
