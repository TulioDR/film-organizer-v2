/*
  Warnings:

  - You are about to drop the column `media_type` on the `Media` table. All the data in the column will be lost.
  - Added the required column `type` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Media" DROP COLUMN "media_type",
ADD COLUMN     "type" TEXT NOT NULL;
