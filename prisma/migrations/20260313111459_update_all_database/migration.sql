/*
  Warnings:

  - You are about to drop the `preoccupations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "preoccupations" DROP CONSTRAINT "preoccupations_userId_fkey";

-- DropTable
DROP TABLE "preoccupations";

-- CreateTable
CREATE TABLE "signalements" (
    "id" TEXT NOT NULL,
    "sujet" TEXT,
    "message" TEXT NOT NULL,
    "cree_le" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifie_le" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "signalements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "signalements" ADD CONSTRAINT "signalements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
