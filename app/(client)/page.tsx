import ChatSection from "@/components/home/chat-section";
import LeadingSection from "@/components/home/leading-section";
import PanelSection from "@/components/home/panel-section";
import RatingSection from "@/components/home/rating-section";
import TableSection from "@/components/home/table-section";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
// import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
  // noStore();
  return (
    <main className="flex-1">
      <LeadingSection />
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-xl p-8 border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors group"
              >
                <span className="text-primary text-4xl group-hover:scale-110 transition-transform">
                  <Skeleton />
                </span>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">
                  <Skeleton />
                </p>
                <p className="text-slate-900 dark:text-slate-50 text-4xl font-black">
                  <Skeleton />
                </p>
                <p className="text-slate-400 text-xs">
                  <Skeleton />
                </p>
              </div>
            ))}
          </div>
        }
      >
        <RatingSection />
      </Suspense>
      <PanelSection />
      <ChatSection />
      <TableSection />
    </main>
  );
}
