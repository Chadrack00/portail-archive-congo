"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { takeRdvAction } from "@/lib/profil/take-rdv";
import {
  takeRdvSchema,
  type TakeRdvSchema,
} from "@/types/zod-types/post-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { DatePickerSimple } from "../complete-profil/date-input";
import { Textarea } from "../ui/textarea";

export default function DialogToTakeRdv({
  id_medecin,
  isOpen,
  onOpenChange,
}: {
  id_medecin: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [openDate, setOpenDate] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TakeRdvSchema>({
    resolver: zodResolver(takeRdvSchema),
    defaultValues: {
      date_rdv: new Date(),
    },
  });

  const onSubmit: SubmitHandler<TakeRdvSchema> = (data) => {
    setServerError(null);
    startTransition(async () => {
      const response = await takeRdvAction(data, id_medecin);
      if (response.success) {
        onOpenChange(false);
        reset();
      } else {
        setServerError(response.message || "Une erreur inconnue est survenue.");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Prise de rendez-vous</DialogTitle>
            <DialogDescription>
              Veuillez saisir les deux champs ci-dessous pour prendre
              rendez-vous
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="mt-4 mb-6">
            <Field>
              <Label htmlFor="motif">Motif du rendez-vous</Label>
              <Textarea
                id="motif"
                {...register("motif")}
                placeholder="Bonjour docteur, j'ai besoin de prendre un rendez-vous avec vous pour ..."
              />
              {errors.motif && (
                <FieldDescription className="text-red-500 text-sm">
                  {errors.motif.message}
                </FieldDescription>
              )}
            </Field>
            <Field>
              <Controller
                name="date_rdv"
                control={control}
                render={({ field }) => (
                  <DatePickerSimple
                    date={field.value}
                    setDate={field.onChange}
                    open={openDate}
                    setOpen={setOpenDate}
                    title="Date de rendez-vous"
                  />
                )}
              />
              {errors.date_rdv && (
                <FieldDescription className="text-red-500 text-sm">
                  {errors.date_rdv.message}
                </FieldDescription>
              )}
            </Field>
            {serverError && (
              <p className="text-red-500 text-sm mt-2">{serverError}</p>
            )}
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                type="button"
                disabled={isPending || isSubmitting}
              >
                Annuler
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending || isSubmitting}>
              {isPending || isSubmitting ? "Envoi..." : "Prendre rendez-vous"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
