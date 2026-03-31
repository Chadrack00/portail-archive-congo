"use client";

import { Stethoscope } from 'lucide-react';

export default function CardIcon({ showName }: { showName: boolean }) {
  return (
    <>
      <div className="border border-blue-500 text-primary-foreground flex size-24 items-center justify-center rounded-md">
        <Stethoscope className="size-14" color="blue" strokeWidth={1.5}/>
      </div>
      {showName && (
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl font-bold text-blue-500">SanteConnect </p>
          <p>Portail de gestion des consultations médicales</p>
        </div>
      )}
    </>
  );
}
