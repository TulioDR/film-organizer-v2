/*
  Warnings:

  - You are about to drop the column `creatorId` on the `List` table. All the data in the column will be lost.
  - You are about to drop the `Media` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "List" DROP CONSTRAINT "List_creatorId_fkey";

-- AlterTable
ALTER TABLE "List" DROP COLUMN "creatorId";

-- DropTable
DROP TABLE "Media";

-- DropTable
DROP TABLE "User";
