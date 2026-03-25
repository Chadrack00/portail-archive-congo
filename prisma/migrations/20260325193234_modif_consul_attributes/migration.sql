/*
  Warnings:

  - You are about to drop the column `id_medecin` on the `consultations` table. All the data in the column will be lost.
  - You are about to drop the column `id_patient` on the `consultations` table. All the data in the column will be lost.
  - Added the required column `id_rdv` to the `consultations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "consultations" DROP CONSTRAINT "consultations_id_medecin_fkey";

-- DropForeignKey
ALTER TABLE "consultations" DROP CONSTRAINT "consultations_id_patient_fkey";

-- AlterTable
ALTER TABLE "consultations" DROP COLUMN "id_medecin",
DROP COLUMN "id_patient",
ADD COLUMN     "id_rdv" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "consultations_id_rdv_fkey" FOREIGN KEY ("id_rdv") REFERENCES "rendez-vous"("id_rdv") ON DELETE CASCADE ON UPDATE CASCADE;
