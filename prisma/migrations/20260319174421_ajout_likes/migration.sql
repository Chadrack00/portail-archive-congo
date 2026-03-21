/*
  Warnings:

  - You are about to drop the column `nombre_aime` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `nombre_non_aime` on the `posts` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "LikeType" AS ENUM ('aime', 'non_aime');

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "nombre_aime",
DROP COLUMN "nombre_non_aime";

-- CreateTable
CREATE TABLE "likes" (
    "id_like" TEXT NOT NULL,
    "type" "LikeType" NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "id_post" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id_like")
);

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_id_post_fkey" FOREIGN KEY ("id_post") REFERENCES "posts"("id_post") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
