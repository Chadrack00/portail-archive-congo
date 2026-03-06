import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export default async function Home() {
  await createUser();
  return <p>Home</p>;
}

async function createUser() {

  // // Admin user
  // await auth.api.signUpEmail({
  //   body: {
  //     name: "Chadrack",
  //     email: "chadracksamba@gmail.com",
  //     password: "password1234",
  //     sexe: "M", 
  //   },
  // });
  //   await auth.api.signUpEmail({
  //   body: {
  //     name: "Chadrack",
  //     email: "chadracksamba394@gmail.com",
  //     password: "password1234",
  //     sexe: "M", 
  //   },
  // });

  // // worker user
  // await auth.api.signUpEmail({
  //   body: {
  //     name: "Manasse",
  //     email: "joriskayembe@gmail.com",
  //     password: "password4567",
  //     sexe: "F", 
  //   },
  // });

  // // user
  // await auth.api.signUpEmail({
  //   body: {
  //     name: "Dodo",
  //     email: "dodokayembe@gmail.com",
  //     password: "password0000",
  //     sexe: "M", 
  //   },
  // });
  // try {
  //   // On contourne la sécurité de l'API et on modifie la BDD directement
  //   await prisma.user.update({
  //     where: { id: "MxELz3ZxgHQln9g3iiMUafibV0ZlancS" },
  //     data: {
  //       banned: true,
  //       banReason: "Spamming",
  //       banExpires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // Dans 7 jours
  //       is_active: false // Au cas où tu vérifies is_active aussi dans tes hooks !
  //     }
  //   });
  //   console.log("✅ === Utilisateur modifé directement en BDD ! ===");
  // } catch (error: any) {
  //   console.error("❌ === ERREUR DE BDD ===");
  //   console.error("Message :", error.message);
  // }
// await auth.api.setRole({
//       body: {
//         userId: "hU7xlsZvYHViiqTQfmngLWG9CA03ZpX9",
//         role: "admin", // 👈 Le rôle défini dans tes permissions
//       },
//       headers: await headers(),
//     });
// console.log("Je suis dans /")
}
