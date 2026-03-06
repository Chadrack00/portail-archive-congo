/*
  Warnings:

  - You are about to alter the column `name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `image` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "compte_bannis" (
    "id_compte_bannis" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "compte_bannis_pkey" PRIMARY KEY ("id_compte_bannis")
);

-- CreateTable
CREATE TABLE "lettre_informations" (
    "id_lettre_information" TEXT NOT NULL,
    "nom" VARCHAR(30) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lettre_informations_pkey" PRIMARY KEY ("id_lettre_information")
);

-- CreateTable
CREATE TABLE "posts" (
    "id_post" TEXT NOT NULL,
    "titre" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "contenu" TEXT NOT NULL,
    "date_origine" TIMESTAMP(3) NOT NULL,
    "nombre_aime" INTEGER NOT NULL DEFAULT 0,
    "nombre_non_aime" INTEGER NOT NULL DEFAULT 0,
    "nombre_vue" INTEGER NOT NULL DEFAULT 0,
    "telechargeable" BOOLEAN NOT NULL DEFAULT false,
    "publie" BOOLEAN NOT NULL DEFAULT false,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id_post")
);

-- CreateTable
CREATE TABLE "commentaires" (
    "id_commentaire" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "commentaire" VARCHAR(255) NOT NULL,
    "est_visivle" BOOLEAN NOT NULL DEFAULT false,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "id_post" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "commentaires_pkey" PRIMARY KEY ("id_commentaire")
);

-- CreateTable
CREATE TABLE "nombre_telecharements" (
    "id_nombre_telecharements" TEXT NOT NULL,
    "nombre_telecharement" INTEGER NOT NULL DEFAULT 0,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "id_post" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "nombre_telecharements_pkey" PRIMARY KEY ("id_nombre_telecharements")
);

-- CreateTable
CREATE TABLE "galleries" (
    "id_gallerie" TEXT NOT NULL,
    "lien_images" VARCHAR(255) NOT NULL,
    "id_post" TEXT NOT NULL,

    CONSTRAINT "galleries_pkey" PRIMARY KEY ("id_gallerie")
);

-- CreateTable
CREATE TABLE "images3d" (
    "id_images3d" TEXT NOT NULL,
    "lien_images" VARCHAR(255) NOT NULL,
    "id_post" TEXT NOT NULL,

    CONSTRAINT "images3d_pkey" PRIMARY KEY ("id_images3d")
);

-- CreateTable
CREATE TABLE "recits" (
    "id_recit" TEXT NOT NULL,
    "lien_images" VARCHAR(255) NOT NULL,
    "id_post" TEXT NOT NULL,

    CONSTRAINT "recits_pkey" PRIMARY KEY ("id_recit")
);

-- CreateTable
CREATE TABLE "videos" (
    "id_video" TEXT NOT NULL,
    "lien_video" VARCHAR(255) NOT NULL,
    "id_post" TEXT NOT NULL,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id_video")
);

-- CreateIndex
CREATE UNIQUE INDEX "compte_bannis_email_key" ON "compte_bannis"("email");

-- CreateIndex
CREATE INDEX "index_email_compte_bannis" ON "compte_bannis"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lettre_informations_email_key" ON "lettre_informations"("email");

-- CreateIndex
CREATE INDEX "index_email_lettre_informations" ON "lettre_informations"("email");

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");

-- CreateIndex
CREATE INDEX "index_titre_slug_posts" ON "posts"("titre", "slug");

-- CreateIndex
CREATE INDEX "index_contenu_posts" ON "posts"("contenu");

-- CreateIndex
CREATE INDEX "index_date_origine_posts" ON "posts"("date_origine");

-- CreateIndex
CREATE INDEX "index_email_commentaires" ON "commentaires"("email");

-- CreateIndex
CREATE INDEX "index_commentaire_commentaires" ON "commentaires"("commentaire");

-- CreateIndex
CREATE INDEX "session_token_idx" ON "session"("token");

-- CreateIndex
CREATE INDEX "user_email_idx" ON "user"("email");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentaires" ADD CONSTRAINT "commentaires_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentaires" ADD CONSTRAINT "commentaires_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nombre_telecharements" ADD CONSTRAINT "nombre_telecharements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nombre_telecharements" ADD CONSTRAINT "nombre_telecharements_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "galleries" ADD CONSTRAINT "galleries_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images3d" ADD CONSTRAINT "images3d_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recits" ADD CONSTRAINT "recits_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;
