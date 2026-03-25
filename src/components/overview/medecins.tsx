import { getOverviewMedecins } from "@/lib/overview/action";
import {
  CalendarCheck,
  CalendarX,
  FileText,
  Mail,
  MapPin,
  Search,
  Star,
  UserX,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default async function Medecins() {
  const medecins = await getOverviewMedecins();

  return (
    <div className="lg:col-span-3 space-y-6">
      {/* <!-- Advanced Quick Filters --> */}
      <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex-1 min-w-[200px] relative">
          <FileText
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={15}
          />
          <input
            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-primary text-sm"
            placeholder="Nom du medecin ou la spécialité ..."
            type="text"
          />
        </div>
        <Button className="bg-primary text-white p-2.5 rounded-lg hover:bg-primary/90 flex items-center justify-center">
          <Search size={15} />
        </Button>
      </div>

      {/* <!-- Empty State --> */}
      {medecins.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 border-dashed text-center">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-full mb-4">
            <UserX size={32} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Aucun médecin trouvé
          </h3>
          <p className="text-slate-500 mt-1 max-w-sm">
            Il n&apos;y a actuellement aucun praticien inscrit sur la
            plateforme.
          </p>
        </div>
      )}

      {/* <!-- Doctors List --> */}
      {medecins.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 max-h-[700px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {medecins.map(
            ({ nom, slug, image, specialite, adresse, disponible }, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all flex flex-col group h-fit"
              >
                <Link href={`/${slug}`} className="p-6 flex gap-5 pointer-cursor">
                  <div className="h-24 w-24 rounded-2xl overflow-hidden shrink-0 ring-4 ring-slate-50 dark:ring-slate-800">
                    <Image
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                      alt={`Portrait de ${nom}`}
                      src={image || "/placeholder-user.jpg"}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          {nom}
                        </h3>
                        <p className="text-primary font-semibold text-sm">
                          {specialite}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full text-xs font-bold">
                        <Star className="text-xs! fill-1!" size={15} /> 4.9
                      </div>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                        <MapPin className="text-base!" size={15} />
                        <span className="line-clamp-1" title={adresse}>
                          {adresse}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span>
                          {disponible ? (
                            <span className="text-green-600 dark:text-green-400 flex gap-2 items-center">
                              <CalendarCheck className="text-base!" size={15} />{" "}
                              Disponible
                            </span>
                          ) : (
                            <span className="text-slate-500 flex gap-2 items-center">
                              <CalendarX className="text-base!" size={15} />{" "}
                              Indisponible
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6 pt-0 mt-auto grid grid-cols-2 gap-3">
                  <Link
                    href={`/${slug}/posts`}
                    className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-2.5 rounded-lg text-sm font-bold transition-colors"
                  >
                    <Mail className="text-base!" size={15} /> Voir ses posts
                  </Link>
                  <Link
                    href={`/${slug}?showRdvModal=true`}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20"
                  >
                    Rendez-vous
                  </Link>
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
