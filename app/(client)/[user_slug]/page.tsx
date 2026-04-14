import HeaderProfil from "@/components/user/header";
import ProfilTabs from "@/components/user/profile-tabs";
import ReportUser from "@/components/user/report";
import StaticConsultationsPage from "@/components/user/static-consultations-page";
import StaticPostPage from "@/components/user/static-post";
import StaticRdvPage from "@/components/user/static-rdv";
import { auth } from "@/lib/auth";
import { checkSlug } from "@/lib/posts/check-slug";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ user_slug: string }>;
  searchParams: Promise<{ showRdvModal: string }>;
}) {
  const { user_slug } = await params;
  const { showRdvModal } = await searchParams;

  const isRdvModelOpen = showRdvModal === "true";

  console.log(user_slug);
  const user = await checkSlug(user_slug);
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(user.id === session?.user.id);
  console.log(session?.user.role);
  const isOwner = user.id === session?.user.id;
  const isSessionDoctor = session?.user.role === "medecin";
  const isSessionUser = session?.user.role === "user";
  if (user?.role === "user" && !isOwner) notFound();

  const d =
    user?.role === "medecin"
      ? await prisma.medecins.findUnique({
          where: {
            userId: user.id,
          },
          select: {
            id_medecin: true,
            specialite: true,
            description: true,
          },
        })
      : null;
  const data = {
    nom: user.name ?? "",
    prenom: user.prenom ?? "",
    image: user?.image ?? "",
    specialite: d?.specialite ?? "",
    adresse_residence: user.adresse_residence ?? "",
    description: d?.description ?? "",
  };
  console.log(user?.role === "medecin", " et ", isOwner);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="w-full max-w-5xl mx-auto px-4 py-8">
        {/* Header Profil */}
        <Suspense fallback={<p>Loading...</p>}>
          <HeaderProfil
            isDoctor={user?.role === "medecin"}
            isSessionUser={isSessionUser}
            user={data}
            isOwner={isOwner}
            // L'id du medecin doit exister et la session doit etre celui d'un user qui a le role "user"
            id_medecin={isSessionDoctor ? d?.id_medecin : undefined}
            isOpen={isRdvModelOpen}
          />
        </Suspense>

        {/* <!-- Profile Tabs Content --> */}
        <ProfilTabs
          isDoctor={user?.role === "medecin"}
          user_slug={user_slug}
          isOwner={isOwner}
          postsTabContent={
            <Suspense fallback={<p>Chargement des posts...</p>}>
              <StaticPostPage slug={user_slug} />
            </Suspense>
          }
          rdvTabContent={
            <Suspense fallback={<p>Chargement des RDV...</p>}>
              <StaticRdvPage
                slug={user_slug}
                isSessionDoctor={isSessionDoctor}
              />
            </Suspense>
          }
          consultationsTabContent={
            <Suspense fallback={<p>Chargement des consultations...</p>}>
              <StaticConsultationsPage slug={user_slug} />
            </Suspense>
          }
        />

        {/* <!-- Report / Support Area --> */}
        {!isOwner && user.role === "medecin" && (
          <ReportUser id_medecin={user.id} />
        )}
      </main>
    </div>
  );
}
