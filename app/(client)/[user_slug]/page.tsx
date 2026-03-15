import HeaderProfil from "@/components/user/header";
import ProfilTabs from "@/components/user/profile-tabs";
import ReportUser from "@/components/user/report";
import StaticConsultationsPage from "@/components/user/static-consultations-page";
import StaticPostPage from "@/components/user/static-post";
import StaticRdvPage from "@/components/user/static-rdv";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";
export default async function Page({
  params,
}: {
  params: Promise<{ user_slug: string }>;
}) {
  const { user_slug } = await params;
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  console.log(user_slug);
  const user = await prisma.user.findUnique({
    where: {
      slug: user_slug,
    },
  });
  if (!user) {
    notFound();
  }
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(user.id === session?.user.id)
  console.log(session?.user.role)
  const isOwner = user.id === session?.user.id;
  const d =
    user?.role === "medecin"
      ? await prisma.medecins.findUnique({
          where: {
            userId: user.id,
          },
          select: {
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

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        {/* Header Profil */}
        <Suspense fallback={<p>Loading...</p>}>
          <HeaderProfil isDoctor={user?.role === "medecin"} user={data} isOwner={isOwner}/>
        </Suspense>

        {/* <!-- Profile Tabs Content --> */}
        <ProfilTabs
          postsTabContent={
            <Suspense fallback={<p>Chargement des posts...</p>}>
              <StaticPostPage slug={user_slug} />
            </Suspense>
          }
          rdvTabContent={
            <Suspense fallback={<p>Chargement des RDV...</p>}>
              <StaticRdvPage slug={user_slug} />
            </Suspense>
          }
          consultationsTabContent={
            <Suspense fallback={<p>Chargement des consultations...</p>}>
              <StaticConsultationsPage slug={user_slug} />
            </Suspense>
          }
        />

        {/* <!-- Report / Support Area --> */}
        {(!isOwner && (user.role === "medecin")) && <ReportUser id_medecin={user.id} />}
      </main>
    </div>
  );
}
