"use client";
import { Calendar, Eye, Plus, ReceiptText, Stethoscope } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
export default function ProfilTabs({
  user_slug,
  isOwner,
  isDoctor,
  postsTabContent,
  rdvTabContent,
  consultationsTabContent,
}: {
  user_slug: string;
  isOwner: boolean;
  isDoctor: boolean;
  postsTabContent: React.ReactNode;
  rdvTabContent: React.ReactNode;
  consultationsTabContent: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("posts");
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden w-full">
      {/* <!-- Navigation Tabs --> */}
      <div className="flex gap-16 border-b border-slate-200 dark:border-slate-800 px-8">
        {isDoctor && (
          <button
            onClick={() => setActiveTab("posts")}
            className={`flex items-center gap-2 py-4 px-2 border-b-2 ${activeTab === "posts" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"} font-medium transition-all`}
          >
            <span className="material-symbols-outlined text-xl">
              <ReceiptText size={15} />
            </span>
            Posts{" "}
            {isOwner && (
              <Link
                href={`${user_slug}/posts/create`}
                className="p-1 rounded-full border border-slate-200 dark:border-slate-800"
              >
                <Plus size={15} />
              </Link>
            )}
          </button>
        )}
        {isOwner && (
          <>
            <div className="flex items-center gap-0">
              <button
                onClick={() => setActiveTab("rendez-vous")}
                className={`flex items-center gap-2 py-2 px-3 border-b-2 ${activeTab === "rendez-vous" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"} font-medium transition-all`}
              >
                <span className="material-symbols-outlined text-xl">
                  <Calendar size={15} />
                </span>
                Rendez-vous
              </button>
              
            </div>
            <div className="flex items-center gap-0">
              <button
                onClick={() => setActiveTab("consultations")}
                className={`flex items-center gap-2 py-2 px-3 border-b-2 ${activeTab === "consultations" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"} font-medium transition-all`}
              >
                <span className="material-symbols-outlined text-xl">
                  <Stethoscope size={15} />
                </span>
                Consultations
              </button>

              <Link href={`/`} className="p-0">
                <Button className="px-0">
                  <Eye size={13} />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
      {/* <!-- Posts Tab Content --> */}
      <div className="p-8 w-full">
        {activeTab === "posts" && (
          <div className="w-full">
            {postsTabContent}
          </div>
        )}
        {activeTab === "rendez-vous" && (
          <div className="gap-6">
            {/* <StaticPostPage slug={slug} /> */}
            {rdvTabContent}
          </div>
        )}
        {activeTab === "consultations" && (
          <div className="gap-6">
            {/* <StaticPostPage slug={slug} /> */}
            {consultationsTabContent}
          </div>
        )}
      </div>
    </div>
  );
}
