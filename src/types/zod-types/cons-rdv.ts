import { z } from "zod";

export const ConsultationSchema = z.object({
  diagnostique: z.string().min(5, {
    message: "Le diagnostique doit contenir au moins 5 caractères.",
  }),
});

export type ConsultationFormValues = z.infer<typeof ConsultationSchema>;
