import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";
export default function PanelSection() {
  const specialistes = [
    {
      name: "Dr. Jean Dupont",
      specialite: "Cardiologue",
      ville: "Paris, France",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD86FGJ6XG7wdmCmOHl1SDvZfwr2y5AjEQ9Mc1BpC6jEGMB5gK1hJUZVzjRZtOOrs1T3Poo4aeR6sDe9v2KycYLlKYw8CxJRoNLtBPZz0wvG3wjs2be3tLXo152mQo7UuXzSExK7ounX0yEg5lHGn10ciLpXS4x5YGKSIvWgvMaFsx1abK2YuW08DKm3Kbg9Z9PEV8ONqI7I70TBe2Cdb4VZsW90ebyrY0fqF44bwAci7WGYNfj7agotrppQlCA1ywdI4XGd4as4Bg",
    },
    {
      name: "Dr. Marie Curie",
      specialite: "Généraliste",
      ville: "Lyon, France",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGn3i1FHGvRNlLd8m4iNUnzzQPhSKJuC69UbVKwEz3ikno_rDUbwtdcvBAuow0RPdMxDI9JjQVLZu53GNUlsKgQAl_0Zo3owIbud33r5sfKVYqECzj1L7p4cg71DjcspD_Hg59YyDITaXq9ee1Qq64uEq7I9xGa7JxVesLNispSoQ7qGbGhG0-YJenllhkFSHwwISh-a5ZcCiE_52cfxQlS_5Sqq_93vAJqBemxlp4AL_lDPRRt4VxqfCWgFc9Un2LAkfPTvPzRWw",
    },
    {
      name: "Dr. Lucas Bernard",
      specialite: "Pédiatre",
      ville: "Marseille, France",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3M_TMy9E9Um-u-fR_eCne00OUY_uRtZpSe1dQgv9jw5sX0k8xDagbipL6HaSchZAZvIzguTTSiP64B3cl9u6SDRdHvW-u6T59njx2FCcp9VkG0MQm-1fOFRU5-U5Qs64DY5BrZVmyFRKaD0enQlftVOjx32-eJ6_WsHs1lZ1-Lee7aAODQoDYS-1g984WtZEg7qNN_szxNW-2V_abQl0QvuT0H8F3ErHrBTRWTfauTBC3iUYxNYjrHi8dGb58aY5UF8c70foyusU",
    },
  ];
  return (
    <section className="px-6 lg:px-40 py-20">
      <div className="mb-12">
        <h2 className="text-slate-900 dark:text-slate-50 text-3xl font-bold tracking-tight mb-4">
          Trouvez votre spécialiste
        </h2>
        <p className="text-slate-500 max-w-2xl">
          Une large sélection de professionnels de santé prêts à vous recevoir.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialistes.map((specialiste, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-full aspect-square overflow-hidden rounded-xl">
              <Image
                alt="Image d'illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                data-alt="Male doctor portrait professional background"
                src={specialiste.image}
                width={1000}
                height={1000}
              />
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-slate-900 dark:text-slate-100 font-bold text-lg">
                {specialiste.name}
              </h3>
            <p className="text-primary font-medium text-sm">{specialiste.specialite}</p>
            <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400 text-sm">
              <span className="material-symbols-outlined text-sm">
                <MapPin size={15} />
              </span>
              <span>{specialiste.ville}</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
              <span className="text-emerald-500 text-xs font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
                DISPONIBLE
              </span>
              <Button className="text-white text-sm font-bold hover:underline underline-offset-4">
                Prendre RDV
              </Button>
            </div>
          </div>
        </div>))}
      </div>
    </section>
  );
}
