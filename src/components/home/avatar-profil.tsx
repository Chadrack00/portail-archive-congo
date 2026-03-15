import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import { ChevronDown, CircleUserRound } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { UserMenuActions } from "./user-menu-actions";

export async function UserProfilAvatar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border rounded-xl cursor-pointer hover:bg-gray-800/30 duration-75 p-2"
      >
        <span className="flex justify-between items-center gap-2">
          <Avatar className="border flex justify-center items-center bg-gray-400">
            {session ? (
              <>
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={`Image de profil de ${session.user?.prenom} ${session.user.name}`}
                    width={100}
                    height={100}
                    className="size-full"
                  />
                ) : (
                  <>
                    {session.user.prenom?.[0].toUpperCase()} {" "}
                    {session.user.postnom?.[0].toUpperCase()}
                  </>
                )}
              </>
            ) : (
              <CircleUserRound />
            )}
          </Avatar>
          <ChevronDown size={16} />
        </span>
      </DropdownMenuTrigger>

      {/* On n'affiche les actions que si la session existe */}
      {session ? (
        <UserMenuActions slug={session.user?.slug ?? ""} />
      ) : (
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/sign-in">Se connecter</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/sign-up">S&apos;inscrire</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
