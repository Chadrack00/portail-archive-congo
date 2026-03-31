"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
  StatusRvd,
  User,
} from "@/generated/prisma";
import {
  ConsultationFormValues,
  ConsultationSchema,
} from "@/types/zod-types/cons-rdv";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ellipsis, Eye, Loader2, Paperclip, Send, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  createConsultation,
  deleteRendezVous,
  getRendezVous,
  invitePatientForAnotherRendezVous,
  rappelPatient,
  updateRendezVousStatus,
} from "./action";
import ConsultationsList from "./consultations";

type RdvType = RendezVous & {
  patients: (Patients & { user: User }) | null;
  medecins: (Medecins & { user: User }) | null;
  consultations: (Consultations & { fichiers?: { lien_fichier: string }[] })[];
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

const statusColorMap = {
  attente: "bg-amber-50 text-amber-700",
  confirme: "bg-blue-50 text-blue-700",
  annule: "bg-red-50 text-red-700",
  termine: "bg-green-50 text-green-700",
};

const statusLabelMap = {
  attente: "En attente",
  confirme: "Confirmé",
  annule: "Annulé",
  termine: "Terminé",
};

export default function TableConsRdv({ slug }: { slug: string }) {
  const [view, setView] = useState<"rdv" | "consultation">("rdv");
  const [rdvList, setRdvList] = useState<RdvType[]>([]);
  const [isLoading, startTransition] = useTransition();

  // Controlled Modals States Map to allow closing them internally per row
  const [openCreateMap, setOpenCreateMap] = useState<Record<string, boolean>>(
    {},
  );
  const [openInviteMap, setOpenInviteMap] = useState<Record<string, boolean>>(
    {},
  );

  const fetchRdv = () => {
    startTransition(async () => {
      const res = await getRendezVous(slug);
      if (res.success) setRdvList(res.data);
    });
  };

  useEffect(() => {
    if (view === "rdv") fetchRdv();
  }, [view, slug]);

  const handleStatusChange = (id: string, status: StatusRvd) => {
    startTransition(async () => {
      const res = await updateRendezVousStatus(id, status);
      if (res.success) {
        toast.success("Statut mis à jour et patient informé avec succès");
        fetchRdv();
      } else {
        toast.error("Erreur lors de la mise à jour");
      }
    });
  };

  const handleDelete = (id: string) => {
    startTransition(async () => {
      const res = await deleteRendezVous(id);
      if (res.success) {
        toast.success("Rendez-vous supprimé");
        fetchRdv();
      } else {
        toast.error("Erreur lors de la suppression");
      }
    });
  };

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: { diagnostique: "" },
  });

  const onSubmitConsultation = async (
    id_rdv: string,
    data: ConsultationFormValues,
    files: FileList | null,
  ) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("diagnostique", data.diagnostique);

      if (files) {
        if (files.length > 3) {
          toast.error("3 Fichiers maximum sont autorisés.");
          return;
        }
        Array.from(files).forEach((f) => formData.append("files", f));
      }

      const res = await createConsultation(id_rdv, formData);
      if (res.success) {
        toast.success("Consultation établie avec succès");
        form.reset();
        setOpenCreateMap((prev) => ({ ...prev, [id_rdv]: false })); // Close modal
        fetchRdv();
      } else {
        toast.error("Erreur lors de la création");
      }
    });
  };

  const [inviteMessage, setInviteMessage] = useState("");
  const handleInviteSubmit = (id_rdv: string) => {
    if (!inviteMessage.trim()) return;
    startTransition(async () => {
      const res = await invitePatientForAnotherRendezVous(
        id_rdv,
        inviteMessage,
      );
      if (res.success) {
        toast.success("Invitation envoyée au patient");
        setInviteMessage("");
        setOpenInviteMap((prev) => ({ ...prev, [id_rdv]: false }));
      } else {
        toast.error("Échec de l'envoi de l'invitation");
      }
    });
  };

  const handleRappel = (id: string) => {
    startTransition(async () => {
      const res = await rappelPatient(id);
      if (res.success) {
        toast.success("Email de rappel envoyé au patient");
      } else {
        toast.error("Erreur lors de l'envoi de l'email");
      }
    });
  };

  if (view === "consultation") {
    return <ConsultationsList slug={slug} onViewChange={(v) => setView(v)} />;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="relative inline-block text-left group">
            <Select
              value={view}
              onValueChange={(v: "rdv" | "consultation") => setView(v)}
              
            >
              <SelectTrigger className="w-full max-w-48 dark:text-slate-300">
                <SelectValue placeholder="Selectionnez une option" />
              </SelectTrigger>
              <SelectContent className="dark:text-slate-300">
                <SelectGroup>
                  <SelectLabel>Options :</SelectLabel>
                  <SelectItem value="rdv" className="dark:text-slate-300">Rendez-vous</SelectItem>
                  <SelectItem value="consultation" className="dark:text-slate-300">Consultation</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto relative">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-bold dark:text-slate-300">
            Mes rendez-vous
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
                Nom Patient
              </TableHead>
              <TableHead className="px-6 py-5 text-xs font-bold text-slate-600 uppercase tracking-widest">
                Motif
              </TableHead>
              <TableHead className="px-6 py-5 text-xs font-bold text-slate-600 uppercase tracking-widest">
                État
              </TableHead>
              <TableHead className="px-6 py-5 text-xs font-bold text-slate-600 uppercase tracking-widest text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-outline-variant dark:divide-slate-700">
            {rdvList.length === 0 && !isLoading && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-10 text-slate-500"
                >
                  Aucun rendez-vous trouvé.
                </TableCell>
              </TableRow>
            )}
            {rdvList.map((rdv) => {
              const patient = rdv.patients?.user;
              const [dateStr, hourStr] = formatDateDisplay(rdv.date_rdv);
              const statusColors =
                statusColorMap[rdv.status as StatusRvd] || "";
              const statusName =
                statusLabelMap[rdv.status as StatusRvd] || rdv.status;

              return (
                <TableRow
                  key={rdv.id_rdv}
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
                      <span className="text-sm font-semibold dark:text-slate-300">
                        {patient?.name} {patient?.postnom}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-5 wrap-break-word dark:text-slate-300">
                    {rdv.motif}
                  </TableCell>
                  <TableCell className="px-6 py-5">
                    <Badge className={statusColors}>{statusName}</Badge>
                  </TableCell>
                  <TableCell className="px-6 py-5 text-right flex items-center justify-end gap-2 h-full">
                    {/* View Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="p-2 hover:text-primary hover:bg-primary-fixed/30 rounded-lg transition-all"
                          variant="ghost"
                        >
                          <Eye className="h-4 w-4 dark:text-white" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Détails du rendez-vous</DialogTitle>
                          <DialogDescription>
                            Informations complètes et historique des
                            consultations.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4 dark:text-slate-200">
                          <p>
                            <strong>Motif:</strong> {rdv.motif}
                          </p>
                          <p>
                            <strong>Patient:</strong> {patient?.name}{" "}
                            {patient?.postnom}
                          </p>
                          <p>
                            <strong>Status:</strong>{" "}
                            <Badge className={statusColors}>{statusName}</Badge>
                          </p>
                          <h4 className="font-semibold text-lg mt-4 dark:text-slate-300">
                            Consultations associées
                          </h4>
                          {rdv.consultations?.length > 0 ? (
                            <Accordion
                              type="single"
                              collapsible
                              className="w-full"
                            >
                              {rdv.consultations.map((cons) => (
                                <AccordionItem
                                  value={cons.id_consultation}
                                  key={cons.id_consultation}
                                >
                                  <AccordionTrigger>
                                    Du{" "}
                                    {new Date(
                                      cons.cree_le,
                                    ).toLocaleDateString()}
                                  </AccordionTrigger>
                                  <AccordionContent className="dark:text-slate-400">
                                    <p>{cons.diagnostique}</p>
                                    {cons.fichiers &&
                                      cons.fichiers.length > 0 && (
                                        <div className="mt-2 flex gap-2">
                                          {cons.fichiers.map((f, i) => (
                                            <a
                                              key={i}
                                              href={f.lien_fichier}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="text-blue-500 hover:underline flex items-center text-xs"
                                            >
                                              <Paperclip className="h-3 w-3 mr-1" />{" "}
                                              Pièce {i + 1}
                                            </a>
                                          ))}
                                        </div>
                                      )}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          ) : (
                            <p className="text-sm text-slate-500">
                              Aucune consultation adaptée à ce rdv.
                            </p>
                          )}
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
                          <Trash2 className="h-4 w-4 dark:text-white" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Supprimer le rendez-vous ?</DialogTitle>
                          <DialogDescription>
                            Voulez-vous vraiment supprimer ce rendez-vous ?
                            Cette action est irréversible.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-3 mt-4">
                          <Button variant="outline">Annuler</Button>
                          <Button
                            variant="destructive"
                            onClick={() => handleDelete(rdv.id_rdv)}
                          >
                            {isLoading && (
                              <Loader2 className="animate-spin mr-2 h-4 w-4" />
                            )}{" "}
                            Confirmer
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Ellipsis Actions */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="p-2 hover:text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-500/10 rounded-lg transition-all"
                          variant="ghost"
                        >
                          <Ellipsis className="h-4 w-4 dark:text-white" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>
                            Modifier l&apos;état
                          </DropdownMenuLabel>
                          {["attente", "confirme", "annule", "termine"]
                            .filter((s) => s !== rdv.status)
                            .map((statusItem) => (
                              <DropdownMenuItem
                                key={statusItem}
                                onClick={() =>
                                  handleStatusChange(
                                    rdv.id_rdv,
                                    statusItem as StatusRvd,
                                  )
                                }
                              >
                                <Badge
                                  className={
                                    statusColorMap[statusItem as StatusRvd]
                                  }
                                >
                                  {statusLabelMap[statusItem as StatusRvd]}
                                </Badge>
                              </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />

                        {/* Etablir consultation Action */}
                        <DropdownMenuGroup>
                          <Dialog
                            open={openCreateMap[rdv.id_rdv]}
                            onOpenChange={(open) =>
                              setOpenCreateMap((p) => ({
                                ...p,
                                [rdv.id_rdv]: open,
                              }))
                            }
                          >
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                              >
                                Etablir une consultation
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Nouvelle consultation</DialogTitle>
                              </DialogHeader>
                              <Form {...form}>
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    const diag = form.getValues().diagnostique;
                                    const filesInput = (
                                      e.target as HTMLFormElement
                                    ).querySelector(
                                      'input[type="file"]',
                                    ) as HTMLInputElement;
                                    form.handleSubmit(() =>
                                      onSubmitConsultation(
                                        rdv.id_rdv,
                                        { diagnostique: diag },
                                        filesInput.files,
                                      ),
                                    )();
                                  }}
                                  className="space-y-4 mt-4"
                                >
                                  <FormField
                                    control={form.control}
                                    name="diagnostique"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Diagnostique</FormLabel>
                                        <FormControl>
                                          <Textarea
                                            placeholder="Entrez le diagnostique..."
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormItem>
                                    <FormLabel>
                                      Fichiers Joints (3 max)
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        type="file"
                                        multiple
                                        accept="image/*,.pdf,.doc,.docx"
                                      />
                                    </FormControl>
                                    <p className="text-xs text-slate-500">
                                      Ajoutez des ordonnances, images, ou
                                      rapports.
                                    </p>
                                  </FormItem>
                                  <Button type="submit" disabled={isLoading}>
                                    {isLoading && (
                                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                    )}{" "}
                                    Enregistrer
                                  </Button>
                                </form>
                              </Form>
                            </DialogContent>
                          </Dialog>

                          {/* Rappeler le patient */}
                          <DropdownMenuItem
                            className="text-sm dark:text-slate-300"
                            onClick={() => handleRappel(rdv.id_rdv)}
                          >
                            Rappeler le patient (Auto mails)
                          </DropdownMenuItem>

                          {/* Invite Patient to another RDV */}
                          <Dialog
                            open={openInviteMap[rdv.id_rdv]}
                            onOpenChange={(open) =>
                              setOpenInviteMap((p) => ({
                                ...p,
                                [rdv.id_rdv]: open,
                              }))
                            }
                          >
                            <DialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                              >
                                Inviter un patient à un autre Rdv
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>
                                  Invitation envoyée au patient
                                </DialogTitle>
                                <DialogDescription>
                                  Rédigez le message que vous souhaitez envoyer
                                  à {patient?.name}.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 mt-4">
                                <Textarea
                                  placeholder="Bonjour, je vous invite à..."
                                  value={inviteMessage}
                                  onChange={(e) =>
                                    setInviteMessage(e.target.value)
                                  }
                                  className="h-32"
                                />
                                <div className="flex justify-end">
                                  <Button
                                    disabled={
                                      isLoading || !inviteMessage.trim()
                                    }
                                    onClick={() =>
                                      handleInviteSubmit(rdv.id_rdv)
                                    }
                                  >
                                    {isLoading ? (
                                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                                    ) : (
                                      <Send className="mr-2 h-4 w-4" />
                                    )}
                                    Envoyer
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
