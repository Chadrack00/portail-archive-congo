/*
  Warnings:

  - Added the required column `date_rdv` to the `rendez-vous` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rendez-vous" ADD COLUMN     "date_rdv" TIMESTAMP(3) NOT NULL;
