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
import { Check, Info, Mail, X } from "lucide-react";

export function DialogToCheckEmail({
  open,
  onOpenChange,
  message,
  title,
  type,
  onRedirect,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string;
  title: string;
  type: "mail" | "success" | "error" | "info";
  onRedirect?: ()=> void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            {type === "mail" ? (
              <Mail strokeWidth={1} />
            ) : type === "success" ? (
              <Check strokeWidth={1} />
            ) : type === "error" ? (
              <X strokeWidth={1} />
            ) : (
              <Info strokeWidth={1} />
            )}{" "}
            {title}
          </DialogTitle>
        </DialogHeader>

        <DialogDescription>{message}</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={onRedirect}>OK</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
