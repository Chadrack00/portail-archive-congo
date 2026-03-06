/*
  Warnings:

  - Added the required column `sexe` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SEXE" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "TYPE_CONTENU_DOCUMENT_SOUMIS" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'IMAGE_3D', 'PDF');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "quota_document" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "sexe" "SEXE" NOT NULL;

-- CreateTable
CREATE TABLE "document_soumis" (
    "id_document_soumi" TEXT NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "titre" VARCHAR(255) NOT NULL,
    "type_document" "TYPE_CONTENU_DOCUMENT_SOUMIS" NOT NULL,
    "lien_document" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "document_soumis_pkey" PRIMARY KEY ("id_document_soumi")
);

-- CreateIndex
CREATE UNIQUE INDEX "document_soumis_slug_key" ON "document_soumis"("slug");

-- CreateIndex
CREATE INDEX "document_soumis_description_idx" ON "document_soumis"("description");

-- CreateIndex
CREATE INDEX "document_soumis_titre_slug_idx" ON "document_soumis"("titre", "slug");

-- AddForeignKey
ALTER TABLE "document_soumis" ADD CONSTRAINT "document_soumis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
