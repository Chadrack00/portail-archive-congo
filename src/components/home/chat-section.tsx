import Image from "next/image";
import { Button } from "../ui/button";
import { Phone, Video, CircleCheck, SendHorizontal } from "lucide-react";

export default function ChatSection() {
  return (
    <section className="px-6 lg:px-40 py-20 bg-slate-100 dark:bg-slate-900">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-full overflow-hidden bg-slate-200">
                        <Image
                          alt="Image d'illustration"
                          className="w-full h-full object-cover"
                          data-alt="Doctor avatar thumbnail"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPT7pzwwPBlxW1Tiuv3ZkoOqRdNAp78Uxde5MFfyvpJIjM7Z3BnASBFBqQXcsUzDATLnQgHJ388zV5n5sA-QZ2p3LEa3Z1GP0ZBPjMop8HpFlL5JF9MGzyEnyl5JGKcM1YQzfh63-4aY46OisY4PEL-pGZV52iS89bJqZqrKxzbjfLZS-sFlJP_L994hANhRVW7SBsbjpZ0Nj3tV2cTwCEj2kj8-wxGr6GNfxDqDQLJM4h2iFUQ6T-8Ci-y0zNaaOWcZ3BSBq97Hc"
                          loading="lazy"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100">
                          Dr. Marie Curie
                        </h4>
                        <p className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                          <span className="block size-2 bg-emerald-500 rounded-full animate-pulse"></span>
                          Connecté(e)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined">
                          <Phone />
                        </span>
                      </Button>
                      <Button className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">
                          <Video />
                        </span>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6 h-64 overflow-y-auto pr-2">
                    <div className="flex justify-start">
                      <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                        Bonjour, comment puis-je vous aider aujourd&apos;hui ?
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm text-white">
                        Bonjour Docteur, j&apos;aimerais discuter de mes
                        derniers résultats d&apos;analyses.
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                        Bien sûr. Commençons par la vidéo-conférence pour plus
                        de détails.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      className="flex-1 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-sm focus:ring-primary px-3"
                      placeholder="Écrivez votre message..."
                      type="text"
                    />
                    <Button className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined">
                        <SendHorizontal />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">
                  Consultation à distance
                </span>
                <h2 className="text-slate-900 dark:text-slate-50 text-4xl font-bold mt-4 mb-6 leading-tight">
                  L&apos;expertise médicale, <br />
                  directement chez vous.
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-500 mt-1">
                      <CircleCheck />
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-slate-100">
                        Appels Vidéo HD :
                      </strong>{" "}
                      Une interaction fluide et sécurisée avec votre médecin.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-500 mt-1">
                      <CircleCheck />
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-slate-100">
                        Chat instantané :
                      </strong>{" "}
                      Pour vos questions rapides et suivis post-opératoires.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-500 mt-1">
                      <CircleCheck />
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-slate-100">
                        Partage de documents :
                      </strong>{" "}
                      Envoyez vos résultats en un clic via notre plateforme
                      sécurisée.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
  );
}