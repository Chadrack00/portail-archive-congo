"use client";
import { modifieStatus } from "@/lib/profil/take-rdv";
import { StatusRvd } from "@/generated/prisma";
import { DropdownMenuItem } from "../ui/dropdown-menu";
export default function DropdownMenuStatus({
  status,
  id,
  slug,
}: {
  status: StatusRvd;
  id: string;
  slug: string;
}) {
  return (
    <>
      {["attente", "confirme", "annule", "termine"]
        .filter((d) => d !== status)
        .map((d, index) => (
          <DropdownMenuItem
            key={index}
            className="capitalize"
            onClick={() => {
              modifieStatus(d, id, slug);
            }}
          >
            {d}
          </DropdownMenuItem>
        ))}
    </>
  );
}
