import { prisma } from "@/lib/prisma";
import { CalendarCheck, Stethoscope, Users } from "lucide-react";

export default async function RatingSection() {
  const [c, s, p] = await getRating();
  const rating = [
    {
      icon: CalendarCheck,
      title: "Consultations",
      count: formatNumber(c),
      description: "Effectuées cette année",
    },
    {
      icon: Stethoscope,
      title: "Spécialistes",
      count: formatNumber(s),
      description: "Médecins certifiés",
    },
    {
      icon: Users,
      title: "Utilisateurs",
      count: formatNumber(p),
      description: "Patients satisfaits",
    },
  ];
  return (
    <section className="px-6 lg:px-40 py-12 bg-white dark:bg-slate-900/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rating.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-xl p-8 border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors group"
          >
            <span className="text-primary text-4xl group-hover:scale-110 transition-transform">
              <item.icon />
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
              {item.title}
            </p>
            <p className="text-slate-900 dark:text-slate-50 text-4xl font-black">
              {item.count}
            </p>
            <p className="text-slate-400 text-xs">Effectuées cette année</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// async function getRating() {
//   "use cache"
//   const res = Promise.all([
//     await prisma.consultations.count(),
//     await prisma.patients.count(),
//     await prisma.medecins.count(),
//   ]);
//   return res;
// }

function formatNumber(n: number): string {
  if(n>=1_000_000_00){
    return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "Md+";
  }
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M+";
  }
  if (n >= 1_000) {
    return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "k+";
  }
  return n.toString();
}

const getRating = async()=>{
  const res = Promise.all([
    await prisma.consultations.count(),
    await prisma.patients.count(),
    await prisma.medecins.count(),
  ]);
  return res;
}
