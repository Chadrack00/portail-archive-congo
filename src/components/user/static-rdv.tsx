import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DropdownMenuStatus from "@/components/user/dropdown-status";
import { StatusRvd } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { Calendar, Eye } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
export default async function StaticRdvPage({
  slug,
  isSessionDoctor,
}: {
  slug: string;
  isSessionDoctor: boolean;
}) {
  const rdvs = await getStaticRdv({ slug });

  return (
    <>
      {rdvs.length > 0 && (
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-slate-400">Date</TableHead>
              <TableHead className="text-slate-400">
                Nom {isSessionDoctor ? "Patient" : "Docteur"}
              </TableHead>
              <TableHead className="text-slate-400">Motif</TableHead>
              <TableHead className="text-right text-slate-400">Etat</TableHead>
              {isSessionDoctor && (
                <TableHead className="text-right text-slate-400">Action</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rdvs.map((rdv, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {formatDate(rdv.date)}
                </TableCell>
                <TableCell>
                  {isSessionDoctor ? rdv.nomPatient : rdv.nomMedecin}
                </TableCell>
                <TableCell>{rdv.motif}</TableCell>
                {isSessionDoctor && (
                  <TableCell className="text-right">
                    <Badge
                      className={
                        rdv.status === "attente"
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                          : rdv.status === "confirme"
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                            : rdv.status === "annule"
                              ? "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                              : "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                      }
                    >
                      {rdv.status}
                    </Badge>
                  </TableCell>
                )}
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="text-slate-400  dark:bg-transparent dark:border">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>
                          Choissez une action
                          <DropdownMenuStatus
                            status={rdv.status as StatusRvd}
                            id={rdv.id}
                            slug={slug}
                          />
                        </DropdownMenuLabel>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {/* attente
  confirme
  annule
  termine */}

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
          <Link href={`/`} className="p-0">
                <Button className="px-0">
                  <Eye size={13} />
                </Button>
              </Link>
        </div>
      )}

      {/* {rdvs.length > 0 && (
        <Link href={`/`} className=" bottom-1 right-1 gap-2 flex-end">
          <Button>
            Voir plus <Plus size={15} />
          </Button>
        </Link>
      )} */}
    </>
  );
}

const getStaticRdv = async ({ slug }: { slug: string }) => {
  const results = await prisma.rendezVous.findMany({
    where: {
      OR: [
        {
          medecins: {
            user: { slug: slug },
          },
        },
        {
          patients: {
            user: { slug: slug },
          },
        },
      ],
    },
    include: {
      // Récupérer les infos du patient via la table User
      patients: {
        include: {
          user: {
            select: {
              name: true,
              prenom: true,
              postnom: true,
              image: true,
            },
          },
        },
      },
      // Récupérer les infos du médecin via la table User
      medecins: {
        include: {
          user: {
            select: {
              name: true,
              prenom: true,
              postnom: true,
              image: true,
            },
          },
        },
      },
    },
    orderBy: {
      date_rdv: "asc",
    },
  });

  return results.map((rdv) => ({
    id: rdv.id_rdv,
    date: rdv.date_rdv,
    motif: rdv.motif,
    status: rdv.status,
    // On renomme les attributs pour l'affichage
    nomPatient: rdv.patients.user.name,
    prenomPatient: rdv.patients.user.prenom,
    nomMedecin: rdv.medecins.user.name,
    specialiteMedecin: rdv.medecins.specialite,
    createdAt: rdv.cree_le,
  }));
};

function formatDate(date: Date) {
  const formatteur = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long", // "Jeudi"
    day: "numeric", // "15"
    month: "short", // "sept."
    year: "2-digit", // "22"
  });

  let dateFormatee = formatteur.format(date);

  // Optionnel : Mettre la première lettre en majuscule
  dateFormatee = dateFormatee.charAt(0).toUpperCase() + dateFormatee.slice(1);

  return dateFormatee;
}
