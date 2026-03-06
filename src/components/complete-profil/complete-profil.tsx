"use client";

import { PhoneInput } from "@/components/auth/signup/phone-input";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { completeProfilAction } from "@/lib/auth/complete-profil";
import { cn } from "@/lib/utils";
import {
  CompleteProfilInput,
  CompleteProfilOutput,
  completeProfilSchema,
} from "@/types/zod-types/complete-profil";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { DatePickerSimple } from "./date-input";
import { FileUploadProfil } from "./file-uploads";

const SPECIALITES = [
  "Cardiologie",
  "Dermatologie",
  "Pédiatrie",
  "Gynécologie",
  "Neurologie",
  "Psychiatrie",
  "Ophtalmologie",
  "Radiologie",
  "Gastro-entérologie",
  "Endocrinologie",
];

export default function CompleteProfilForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [step, setStep] = useState(1);
  const [openBirthInput, setOpenBirthInput] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
    onSubmit,
  } = HandleCompleteProfilForm(() => {
    redirect("/");
  });

  const typeProfil = watch("type_profil");
  const specialiteWatch = watch("specialite");

  const handleNext = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["postnom", "prenom"]);
    } else if (step === 2) {
      isValid = await trigger([
        "image_profile",
        "numero_telephone",
        "date_naissance",
        "adresse_residence",
        "sexe",
      ]);
    }
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form
        onSubmit={(e) => {
          if (step !== 3) {
            e.preventDefault();
            void handleNext();
          } else {
            void handleSubmit(onSubmit)(e);
          }
        }}
        encType="multipart/form-data"
      >
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xl font-bold">Complétez votre profil</h1>
            <FieldDescription>Étape {step} sur 3</FieldDescription>
            <div className="flex w-full mt-2 space-x-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={cn(
                    "h-2 w-full rounded-full transition-all duration-300",
                    s !== step ? "bg-primary" : "bg-muted",
                  )}
                />
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Field>
                <FieldLabel htmlFor="postnom">Postnom</FieldLabel>
                <Input
                  id="postnom"
                  placeholder="Votre postnom"
                  {...register("postnom")}
                />
                {errors.postnom && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.postnom.message}
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="prenom">Prénom</FieldLabel>
                <Input
                  id="prenom"
                  placeholder="Votre prénom"
                  {...register("prenom")}
                />
                {errors.prenom && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.prenom.message}
                  </FieldDescription>
                )}
              </Field>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Field>
                <FieldLabel htmlFor="image_profile">Image de Profil</FieldLabel>
                <Controller
                  name="image_profile"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    // <Input
                    //   id="image_profile"
                    //   type="file"
                    //   accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                    //   onChange={(e) => {
                    //     const file = e.target.files?.[0];
                    //     if (file) onChange(file);
                    //   }}
                    //   {...fieldProps}
                    // />
                    <FileUploadProfil files={value} setFiles={onChange} />
                  )}
                />
                <FieldDescription className="text-xs">
                  5MB max (JPG, PNG, WEBP, HEIC, HEIF)
                </FieldDescription>
                {errors.image_profile && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.image_profile.message as string}
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="numero_telephone">
                  Numéro de téléphone
                </FieldLabel>
                <Controller
                  name="numero_telephone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      id="numero_telephone"
                      placeholder="Entrez votre numéro de téléphone"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.numero_telephone && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.numero_telephone.message}
                  </FieldDescription>
                )}
              </Field>

              {/* Birth date */}
              <Field>
                <Controller
                  name="date_naissance"
                  control={control}
                  render={({ field }) => (
                    <DatePickerSimple
                      date={field.value as Date | undefined}
                      setDate={field.onChange}
                      open={openBirthInput}
                      setOpen={setOpenBirthInput}
                    />
                  )}
                />
                {errors.date_naissance && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.date_naissance.message}
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="adresse_residence">
                  Adresse de résidence
                </FieldLabel>
                <Input
                  id="adresse_residence"
                  placeholder="Votre adresse (max 255 charactères)"
                  {...register("adresse_residence")}
                />
                {errors.adresse_residence && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.adresse_residence.message}
                  </FieldDescription>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="sexe">Sexe</FieldLabel>
                <Controller
                  name="sexe"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre sexe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="M">Masculin</SelectItem>
                        <SelectItem value="F">Féminin</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.sexe && (
                  <FieldDescription className="text-red-500 text-sm">
                    {errors.sexe.message}
                  </FieldDescription>
                )}
              </Field>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Field>
                <FieldLabel>Êtes-vous un patient ou un médecin ?</FieldLabel>
                <div className="flex gap-4 mt-2">
                  <div
                    className={cn(
                      "flex-1 border p-4 rounded-lg cursor-pointer text-center font-medium transition-colors",
                      typeProfil === "PATIENT"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted-foreground/20 hover:border-primary/50",
                    )}
                    onClick={() => setValue("type_profil", "PATIENT")}
                  >
                    Patient
                  </div>
                  <div
                    className={cn(
                      "flex-1 border p-4 rounded-lg cursor-pointer text-center font-medium transition-colors",
                      typeProfil === "MEDECIN"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted-foreground/20 hover:border-primary/50",
                    )}
                    onClick={() => setValue("type_profil", "MEDECIN")}
                  >
                    Médecin
                  </div>
                </div>
                {errors.type_profil && (
                  <FieldDescription className="text-red-500 text-sm mt-2">
                    {errors.type_profil.message}
                  </FieldDescription>
                )}
              </Field>

              {typeProfil === "MEDECIN" && (
                <div className="space-y-4 animate-in slide-in-from-top-2 fade-in duration-300">
                  <Field>
                    <FieldLabel htmlFor="specialite">
                      Votre Spécialité
                    </FieldLabel>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {SPECIALITES.map((spec) => (
                        <Badge
                          key={spec}
                          variant={
                            specialiteWatch === spec ? "default" : "outline"
                          }
                          className={`cursor-pointer hover:bg-primary/10 hover:text-primary ${
                            specialiteWatch === spec
                              ? "bg-primary text-primary-foreground border border-white"
                              : ""
                          }`}
                          onClick={() => setValue("specialite", spec)}
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    <Input
                      id="specialite"
                      placeholder="Ou saisissez 	une autre spécialité..."
                      {...register("specialite")}
                    />
                    {errors.specialite && (
                      <FieldDescription className="text-red-500 text-sm">
                        {errors.specialite.message}
                      </FieldDescription>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="description">
                      Description de votre métier
                    </FieldLabel>
                    <Textarea
                      id="description"
                      placeholder="Décrivez votre expérience..."
                      {...register("description")}
                    />
                    {errors.description && (
                      <FieldDescription className="text-red-500 text-sm">
                        {errors.description.message}
                      </FieldDescription>
                    )}
                  </Field>
                </div>
              )}
            </div>
          )}

          {errors.root && (
            <Alert className="max-w bg-transparent border-none flex gap-5 items-center p-0 m-0">
              <AlertTriangleIcon color="red" size={24} />
              <AlertTitle className="text-red-500 flex items-center">
                {errors.root?.message ||
                  "Une erreur est survenue lors de l'enregistrement."}
              </AlertTitle>
            </Alert>
          )}

          <div className="flex gap-4 mt-6">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleBack}
                disabled={isSubmitting}
              >
                Retour
              </Button>
            )}
            {step < 3 && (
              <Button
                type="button"
                className="flex-1"
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
              >
                Suivant
              </Button>
            )}
            {step === 3 && (
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : "Soumettre"}
              </Button>
            )}
          </div>
        </FieldGroup>
      </form>
    </div>
  );
}

function HandleCompleteProfilForm(onSuccessCallback?: () => void) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<CompleteProfilInput>({
    resolver: zodResolver(completeProfilSchema),
    defaultValues: {
      type_profil: "PATIENT",
      image_profile: [],
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<CompleteProfilInput> = async (data) => {
    const res = await completeProfilAction(
      data as CompleteProfilOutput
    );

    if (res.status === 200) {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      setError("root", {
        message: res.message,
      });
    }
  };

  return {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
    onSubmit,
  };
}
