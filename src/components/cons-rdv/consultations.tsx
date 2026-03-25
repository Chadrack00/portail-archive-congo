"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import type {
  Consultations,
  Medecins,
  Patients,
  RendezVous,
  User,
} from "@/generated/prisma";
import { Check, Edit, Eye, Loader2, Paperclip, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import {
  deleteConsultation,
  getConsultationsList,
  updateConsultation,
} from "./action";

type ConsultationType = Consultations & {
  fichiers: { lien_fichier: string }[];
  rdv:
    | (RendezVous & {
        patients: (Patients & { user: User }) | null;
        medecins: (Medecins & { user: User }) | null;
      })
    | null;
};

function formatDateDisplay(dateStr: Date | string) {
  const date = new Date(dateStr);
  const formatDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
  const formatHour = new Intl.DateTimeFormat("fr-FR", {
    hour: "numeric",
    minute: "numeric",
  });
  let dates = formatDate.format(date);
  const hour = formatHour.format(date);
  dates = dates.charAt(0).toUpperCase() + dates.slice(1);
  return [dates, hour];
}

export default function ConsultationsList({
  slug,
  onViewChange,
}: {
  slug: string;
  onViewChange: (v: "rdv" | "consultation") => void;
}) {
  const [consList, setConsList] = useState<ConsultationType[]>([]);
  const [isLoading, startTransition] = useTransition();

  // Maps for modals
  const [openEditMap, setOpenEditMap] = useState<Record<string, boolean>>({});
  const [editValues, setEditValues] = useState<Record<string, string>>({});

  const fetchConsultations = () => {
    startTransition(async () => {
      const res = await getConsultationsList(slug);
      if (res.success) setConsList(res.data);
    });
  };

  useEffect(() => {
    fetchConsultations();
  }, [slug]);

  const handleDelete = (id: string) => {
    startTransition(async () => {
      const res = await deleteConsultation(id);
      if (res.success) {
        toast.success("Consultation supprimée");
        fetchConsultations();
      } else {
        toast.error("Erreur lors de la suppression");
      }
    });
  };

  const handleEditSubmit = (id: string) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("diagnostique", editValues[id] || "");
      const res = await updateConsultation(id, formData);
      if (res.success) {
        toast.success("Consultation modifiée avec succès");
        setOpenEditMap((prev) => ({ ...prev, [id]: false }));
        fetchConsultations();
      } else {
        toast.error("Erreur lors de la modification");
      }
    });
  };

  const openEditModal = (cons: ConsultationType) => {
    setEditValues((prev) => ({
      ...prev,
      [cons.id_consultation]: cons.diagnostique,
    }));
    setOpenEditMap((prev) => ({ ...prev, [cons.id_consultation]: true }));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="relative inline-block text-left group">
            <Select
              value="consultation"
              onValueChange={(v: "rdv" | "consultation") => onViewChange(v)}
            >
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Selectionnez une option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options :</SelectLabel>
                  <SelectItem value="rdv">Rendez-vous</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto relative">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-bold dark:text-slate-300">
            Mes Consultations
          </h2>
          {isLoading && (
            <Loader2 className="animate-spin h-5 w-5 text-primary" />
          )}
        </div>
        <Table className="w-full text-left border-collapse">
          <TableHeader className="bg-slate-200 dark:bg-slate-800">
            <TableRow className="border-b border-outline-variant font-bold">
              <TableHead className="px-6 py-5 text-xs font-bold text-slate-600 uppercase tracking-widest">
                Date &amp; Heure
              </TableHead>
              <TableHead className="px-6 py-5 text-xs font-bold text-slate-600 uppercase tracking-widest">
                Patient / Medecin
              </TableHead>
              <TableHead className="px-6 py-5 text-xs font-bold text-slate-600 uppercase tracking-widest">
                Diagnostique
              </TableHead>
              <TableHead className="px-6 py-5 text-xs font-bold text-slate-600 uppercase tracking-widest text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-outline-variant dark:divide-slate-700">
            {consList.length === 0 && !isLoading && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-10 text-slate-500"
                >
                  Aucune consultation trouvée.
                </TableCell>
              </TableRow>
            )}
            {consList.map((cons) => {
              const patient = cons.rdv?.patients?.user;
              const medecin = cons.rdv?.medecins?.user;
              const [dateStr, hourStr] = formatDateDisplay(cons.cree_le);

              return (
                <TableRow
                  key={cons.id_consultation}
                  className="dark:not-last:hover:bg-slate-700/80"
                >
                  <TableCell className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm dark:text-slate-300 font-bold">
                        {dateStr}
                      </span>
                      <span className="text-xs dark:text-slate-200 text-slate-400 font-medium">
                        {hourStr}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {patient?.image ? (
                        <Image
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                          alt="Photo du patient"
                          src={patient.image}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-sm font-bold">
                          {patient?.name?.charAt(0) || "P"}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold dark:text-slate-300">
                          {patient?.name} {patient?.postnom}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                          Dr. {medecin?.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5 wrap-break-word dark:text-slate-300 line-clamp-2 max-w-xs block overflow-hidden">
                    {cons.diagnostique}
                  </TableCell>
                  <TableCell className="px-6 py-5 text-right align-middle">
                    <div className="flex items-center justify-end gap-2 h-full">
                      {/* View Modal */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="p-2 hover:text-primary hover:bg-primary-fixed/30 rounded-lg transition-all"
                            variant="ghost"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Détails de la consultation
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 py-4 dark:text-slate-200">
                            <p className="text-sm text-slate-500">
                              Du{" "}
                              {new Date(cons.cree_le).toLocaleString("fr-FR")}
                            </p>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                              <h4 className="font-semibold mb-2">
                                Diagnostique :
                              </h4>
                              <p className="dark:text-slate-300">
                                {cons.diagnostique}
                              </p>
                            </div>
                            {cons.fichiers?.length > 0 && (
                              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-md">
                                <h4 className="font-semibold mb-2">
                                  Fichiers Joints :
                                </h4>
                                <div className="space-y-2">
                                  {cons.fichiers.map((f, i) => (
                                    <a
                                      key={f.lien_fichier}
                                      href={f.lien_fichier}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center text-sm text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                                    >
                                      <Paperclip className="h-4 w-4 mr-2" />
                                      Pièce jointe {i + 1}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Edit Modal */}
                      <Dialog
                        open={openEditMap[cons.id_consultation]}
                        onOpenChange={(open) => {
                          if (!open)
                            setOpenEditMap((prev) => ({
                              ...prev,
                              [cons.id_consultation]: false,
                            }));
                        }}
                      >
                        <DialogTrigger asChild>
                          <Button
                            className="p-2 hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-500/10 rounded-lg transition-all"
                            variant="ghost"
                            onClick={() => openEditModal(cons)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Modifier la consultation</DialogTitle>
                            <DialogDescription>
                              Vous pouvez mettre à jour le diagnostic
                              ci-dessous.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 mt-4">
                            <Textarea
                              value={
                                editValues[cons.id_consultation] ??
                                cons.diagnostique
                              }
                              onChange={(e) =>
                                setEditValues((prev) => ({
                                  ...prev,
                                  [cons.id_consultation]: e.target.value,
                                }))
                              }
                              className="h-32"
                              placeholder="Entrez votre diagnostique..."
                            />
                            <div className="flex justify-end gap-3">
                              <Button
                                variant="outline"
                                onClick={() =>
                                  setOpenEditMap((prev) => ({
                                    ...prev,
                                    [cons.id_consultation]: false,
                                  }))
                                }
                              >
                                Annuler
                              </Button>
                              <Button
                                disabled={isLoading}
                                onClick={() =>
                                  handleEditSubmit(cons.id_consultation)
                                }
                              >
                                {isLoading ? (
                                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                                ) : (
                                  <Check className="h-4 w-4 mr-2" />
                                )}
                                Enregistrer
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Delete Modal */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="p-2 hover:text-error hover:bg-error-container/50 rounded-lg transition-all"
                            variant="ghost"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Supprimer la consultation ?
                            </DialogTitle>
                            <DialogDescription>
                              Voulez-vous vraiment supprimer cette consultation
                              de l&apos;historique de {patient?.name} ?
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex justify-end gap-3 mt-4">
                            <Button variant="outline">Annuler</Button>
                            <Button
                              variant="destructive"
                              onClick={() => handleDelete(cons.id_consultation)}
                            >
                              {isLoading && (
                                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                              )}{" "}
                              Confirmer
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
