import { prisma } from "@/lib/prisma";
import { Calendar, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function StaticRdvPage({ slug }: { slug: string }) {
  const rdvs = await getStaticRdv({ slug });

  return (
    <>
      {rdvs.length > 0 && (
        <div className="relative flex-1">
          {rdvs.map((rdv, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 rounded-xl border border-slate-100 dark:border-slate-800 p-4 hover:shadow-md transition-shadow bg-white dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Calendar size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                    {rdv.motif}
                  </h3>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium capitalize ${
                    rdv.status === "confirme"
                      ? "bg-green-100 text-green-700"
                      : rdv.status === "annule"
                        ? "bg-red-100 text-red-700"
                        : rdv.status === "termine"
                          ? "bg-slate-100 text-slate-700"
                          : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {rdv.status}
                </span>
              </div>

              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                <p>Motif : {rdv.motif}</p>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                <span>Créé le {rdv.createdAt.toLocaleDateString()}</span>
              </div>
            </div>
          ))}
          <Link href={`/`} className="absolute bottom-1 right-1 gap-2 flex-end">
            <Button>
              Voir plus <Plus size={15} />
            </Button>
          </Link>
        </div>
      )}

      {!(rdvs.length > 0) && (
        <div className="flex flex-col items-center justify-center py-20 text-center col-span-full border border-slate-200 dark:border-slate-800 rounded-xl">
          <div className="rounded-full bg-slate-50 dark:bg-slate-800/50 p-6 mb-4">
            <Calendar
              size={48}
              className="text-slate-300 dark:text-slate-600"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Aucun rendez-vous
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
            Cet utilisateur n&apos;a pas encore de rendez-vous enregistrés.
          </p>
        </div>
      )}

      {rdvs.length > 0 && (
        <Link href={`/`} className="absolute bottom-1 right-1 gap-2 flex-end">
            <Button>
              Voir plus <Plus size={15} />
            </Button>
          </Link>
      )}
    </>
  );
}

const getStaticRdv = async ({ slug }: { slug: string }) => {
  const results = await prisma.rendezVous.findMany({
    where: {
      OR: [
        {
          medecins: { user: { slug: slug } },
        },
        {
          patients: { user: { slug: slug } },
        },
      ],
    },
    orderBy: {
      cree_le: "desc",
    },
    take: 3,
  });

  return results.map((rdv) => ({
    id: rdv.id_rdv,
    motif: rdv.motif,
    status: rdv.status,
    createdAt: rdv.cree_le,
  }));
};
