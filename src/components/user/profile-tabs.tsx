"use client";
import { Calendar, Plus, ReceiptText, Stethoscope } from "lucide-react";
import { useState } from "react";

export default function ProfilTabs({
  postsTabContent,
  rdvTabContent,
  consultationsTabContent,
}: {
  postsTabContent: React.ReactNode;
  rdvTabContent: React.ReactNode;
  consultationsTabContent: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("posts");
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* <!-- Navigation Tabs --> */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 px-8">
        <button
          onClick={() => setActiveTab("posts")}
          className={`flex items-center gap-2 py-4 px-2 border-b-2 ${activeTab === "posts" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"} font-medium transition-all`}
        >
          <span className="material-symbols-outlined text-xl">
            <ReceiptText size={15} />
          </span>
          Posts <span className="p-1 rounded-full border border-slate-200 dark:border-slate-800"><Plus size={15}/></span>
        </button>
        <button
          onClick={() => setActiveTab("rendez-vous")}
          className={`flex items-center gap-2 py-4 px-6 border-b-2 ${activeTab === "rendez-vous" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"} font-medium transition-all`}
        >
          <span className="material-symbols-outlined text-xl">
            <Calendar size={15} />
          </span>
          Rendez-vous 
        </button>
        <button
          onClick={() => setActiveTab("consultations")}
          className={`flex items-center gap-2 py-4 px-6 border-b-2 ${activeTab === "consultations" ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"} font-medium transition-all`}
        >
          <span className="material-symbols-outlined text-xl">
            <Stethoscope size={15} />
          </span>
          Consultations
        </button>
      </div>
      {/* <!-- Posts Tab Content --> */}
      <div className="flex flex-col gap-2 p-8">
        {activeTab === "posts" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsTabContent}
          </div>
        )}
        {activeTab === "rendez-vous" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <StaticPostPage slug={slug} /> */}
            {rdvTabContent}
          </div>
        )}
        {activeTab === "consultations" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <StaticPostPage slug={slug} /> */}
            {consultationsTabContent}
          </div>
        )}
      </div>
    </div>
  );
}
