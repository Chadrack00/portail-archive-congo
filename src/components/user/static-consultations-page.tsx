import { prisma } from "@/lib/prisma";
import { Plus, Stethoscope } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function StaticConsultationsPage({
  slug,
}: {
  slug: string;
}) {
  const consultations = await getStaticConsultations({ slug });

  return (
    <>
      {consultations.length > 0 && (
        <div className="relative flex-1">
          {consultations.map((consultation, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 rounded-xl border border-slate-100 dark:border-slate-800 p-4 hover:shadow-md transition-shadow bg-white dark:bg-slate-900"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Stethoscope size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    Consultation
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-3">
                  {consultation.diagnostique}
                </p>
              </div>

              <div className="mt-auto pt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 dark:border-slate-800">
                <span>
                  Effectuée le {consultation.createdAt.toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
          <Link
            href={`/${slug}/cons-rdv`}
            className="absolute bottom-1 right-1 gap-2 flex-end"
          >
            <Button>
              Voir plus <Plus size={15} />
            </Button>
          </Link>
        </div>
      )}
      {!(consultations.length > 0) && (
        <div className="flex flex-col items-center justify-center py-20 text-center col-span-full border border-slate-200 dark:border-slate-800 rounded-xl">
          <div className="rounded-full bg-slate-50 dark:bg-slate-800/50 p-6 mb-4">
            <Stethoscope
              size={48}
              className="text-slate-300 dark:text-slate-600"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Aucune consultation
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
            Cet utilisateur n&apos;a pas encore de consultations enregistrées.
          </p>
        </div>
      )}

      {/* {consultations.length > 0 && (
        <Link href={`/${slug}/cons-rdv`} className="flex gap-2 justify-end col-span-full mt-2">
          <Button variant="outline" className="gap-2">
            Voir plus <Plus size={15} />
          </Button>
        </Link>
      )} */}
    </>
  );
}

const getStaticConsultations = async ({ slug }: { slug: string }) => {
  const results = await prisma.consultations.findMany({
    where: {
      OR: [
        {
          rdv: { medecins: { user: { slug: slug } } },
        },
        {
          rdv: { patients: { user: { slug: slug } } },
        },
      ],
    },
    orderBy: {
      cree_le: "desc",
    },
    take: 3,
  });

  return results.map((consultation) => ({
    id: consultation.id_consultation,
    diagnostique: consultation.diagnostique,
    createdAt: consultation.cree_le,
  }));
};
