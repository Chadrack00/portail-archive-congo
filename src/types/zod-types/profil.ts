import { z } from "zod";

export const ReportSchema = z.object({
  motif: z
    .string()
    .min(5, "Le motif doit contenir au moins 5 caractères")
    .max(255, "Le motif est trop long : max 255"),
  id_medecin: z.string(),
});

export type ReportType = z.infer<typeof ReportSchema>;
