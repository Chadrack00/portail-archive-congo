"use client"

import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { UserIcon, LogOutIcon } from "lucide-react";
import { useRouter , redirect} from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function UserMenuActions({ slug }: { slug?: string }) {
  console.log(slug)
  const router = useRouter();
  return (
    <DropdownMenuContent>
      <DropdownMenuItem onClick={() => router.push(`/${slug}`)}>
        <UserIcon className="mr-2 h-4 w-4" /> Profile
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem 
        variant="destructive" 
        onClick={async () => {
          await authClient.signOut();
          redirect("/sign-in")
        }}
      >
        <LogOutIcon className="mr-2 h-4 w-4" /> Déconnection
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
