/*
  Warnings:

  - You are about to drop the column `email` on the `commentaires` table. All the data in the column will be lost.
  - You are about to drop the column `est_visivle` on the `commentaires` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `commentaires` table. All the data in the column will be lost.
  - You are about to drop the column `contenu` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `date_origine` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `publie` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `telechargeable` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `quota_document` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.
  - You are about to drop the `compte_bannis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `document_soumis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `galleries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `images3d` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lettre_informations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nombre_telecharements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_medecin` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusRvd" AS ENUM ('attente', 'confirme', 'annule', 'termine');

-- DropForeignKey
ALTER TABLE "commentaires" DROP CONSTRAINT "commentaires_userId_fkey";

-- DropForeignKey
ALTER TABLE "document_soumis" DROP CONSTRAINT "document_soumis_userId_fkey";

-- DropForeignKey
ALTER TABLE "galleries" DROP CONSTRAINT "galleries_id_post_fkey";

-- DropForeignKey
ALTER TABLE "images3d" DROP CONSTRAINT "images3d_id_post_fkey";

-- DropForeignKey
ALTER TABLE "nombre_telecharements" DROP CONSTRAINT "nombre_telecharements_id_post_fkey";

-- DropForeignKey
ALTER TABLE "nombre_telecharements" DROP CONSTRAINT "nombre_telecharements_userId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_userId_fkey";

-- DropForeignKey
ALTER TABLE "recits" DROP CONSTRAINT "recits_id_post_fkey";

-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_id_post_fkey";

-- DropIndex
DROP INDEX "index_email_commentaires";

-- DropIndex
DROP INDEX "index_contenu_posts";

-- DropIndex
DROP INDEX "index_date_origine_posts";

-- DropIndex
DROP INDEX "index_titre_slug_posts";

-- AlterTable
ALTER TABLE "commentaires" DROP COLUMN "email",
DROP COLUMN "est_visivle",
DROP COLUMN "userId",
ALTER COLUMN "commentaire" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "contenu",
DROP COLUMN "date_origine",
DROP COLUMN "publie",
DROP COLUMN "telechargeable",
DROP COLUMN "userId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "id_medecin" TEXT NOT NULL,
ADD COLUMN     "lien_image" TEXT,
ADD COLUMN     "star" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "titre" SET DATA TYPE TEXT,
ALTER COLUMN "slug" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "phone",
DROP COLUMN "quota_document",
ADD COLUMN     "adresse_residence" VARCHAR(255),
ADD COLUMN     "date_de_naissance" TIMESTAMP(3),
ADD COLUMN     "numero_telephone" VARCHAR(15),
ADD COLUMN     "postnom" VARCHAR(30),
ADD COLUMN     "prenom" VARCHAR(30),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(30);

-- DropTable
DROP TABLE "compte_bannis";

-- DropTable
DROP TABLE "document_soumis";

-- DropTable
DROP TABLE "galleries";

-- DropTable
DROP TABLE "images3d";

-- DropTable
DROP TABLE "lettre_informations";

-- DropTable
DROP TABLE "nombre_telecharements";

-- DropTable
DROP TABLE "recits";

-- DropTable
DROP TABLE "videos";

-- DropEnum
DROP TYPE "TYPE_CONTENU_DOCUMENT_SOUMIS";

-- CreateTable
CREATE TABLE "preoccupations" (
    "id" TEXT NOT NULL,
    "sujet" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "preoccupations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patients" (
    "id_patient" TEXT NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id_patient")
);

-- CreateTable
CREATE TABLE "medecins" (
    "id_medecin" TEXT NOT NULL,
    "specialite" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "nombre_signalement" INTEGER NOT NULL DEFAULT 0,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "medecins_pkey" PRIMARY KEY ("id_medecin")
);

-- CreateTable
CREATE TABLE "rendez-vous" (
    "id_rdv" TEXT NOT NULL,
    "motif" TEXT NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusRvd" NOT NULL DEFAULT 'attente',
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "id_patient" TEXT NOT NULL,
    "id_medecin" TEXT NOT NULL,

    CONSTRAINT "rendez-vous_pkey" PRIMARY KEY ("id_rdv")
);

-- CreateTable
CREATE TABLE "consultations" (
    "id_consultation" TEXT NOT NULL,
    "diagnostique" TEXT NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "id_patient" TEXT NOT NULL,
    "id_medecin" TEXT NOT NULL,

    CONSTRAINT "consultations_pkey" PRIMARY KEY ("id_consultation")
);

-- CreateTable
CREATE TABLE "fichiers" (
    "id_fichier" TEXT NOT NULL,
    "lien_fichier" TEXT NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "id_consultation" TEXT NOT NULL,

    CONSTRAINT "fichiers_pkey" PRIMARY KEY ("id_fichier")
);

-- CreateIndex
CREATE UNIQUE INDEX "patients_userId_key" ON "patients"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "medecins_userId_key" ON "medecins"("userId");

-- CreateIndex
CREATE INDEX "medecins_specialite_idx" ON "medecins"("specialite");

-- CreateIndex
CREATE INDEX "consultations_diagnostique_idx" ON "consultations"("diagnostique");

-- CreateIndex
CREATE INDEX "fichiers_lien_fichier_idx" ON "fichiers"("lien_fichier");

-- AddForeignKey
ALTER TABLE "preoccupations" ADD CONSTRAINT "preoccupations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "patients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medecins" ADD CONSTRAINT "medecins_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rendez-vous" ADD CONSTRAINT "rendez-vous_id_patient_fkey" FOREIGN KEY ("id_patient") REFERENCES "patients"("id_patient") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rendez-vous" ADD CONSTRAINT "rendez-vous_id_medecin_fkey" FOREIGN KEY ("id_medecin") REFERENCES "medecins"("id_medecin") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_id_medecin_fkey" FOREIGN KEY ("id_medecin") REFERENCES "medecins"("id_medecin") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "consultations_id_patient_fkey" FOREIGN KEY ("id_patient") REFERENCES "patients"("id_patient") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consultations" ADD CONSTRAINT "consultations_id_medecin_fkey" FOREIGN KEY ("id_medecin") REFERENCES "medecins"("id_medecin") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichiers" ADD CONSTRAINT "fichiers_id_consultation_fkey" FOREIGN KEY ("id_consultation") REFERENCES "consultations"("id_consultation") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "index_commentaire_commentaires" RENAME TO "commentaires_commentaire_idx";
