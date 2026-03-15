"use client";

import { ChevronRight, Loader2, SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { ReportSchema, ReportType } from "@/types/zod-types/profil";
import { signalUserAction } from "@/lib/profil/signal";
import { toast } from "sonner";

export default function FormReport({id_medecin}: {id_medecin: string}) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ReportType>({
    resolver: zodResolver(ReportSchema),
    defaultValues: {
      motif: "",
      id_medecin : id_medecin
    },
  });
  // toast.info("What is your problem?")

  const onSubmit = async (data: ReportType) => {
    setIsPending(true);
    const result = await signalUserAction(data);
    setIsPending(false);

    if (result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      toast.success("Votre signalement est pris en compte");
      setShowForm(false);
      form.reset();
    }
  };

  return (
    <>
      {!showForm ? (
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center gap-2">
            Envoyer une remarque
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 text-sm font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            Signaler le profil
            <span className="material-symbols-outlined text-lg">
              <ChevronRight />
            </span>
          </button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="motif"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Motif..."
                        className="border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 w-92"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending}>
                
                {form.formState.isSubmitting? <Loader2/> : <SendHorizontal />}
              </Button>
            </div>
            <div className="px-2">
              <FormField
                control={form.control}
                name="motif"
                render={() => <FormMessage />}
              />
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
