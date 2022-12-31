/*
  Warnings:

  - You are about to drop the column `type` on the `Media` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[media_type,media_id,listId]` on the table `Media` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `media_id` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `media_type` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Media" DROP COLUMN "type",
ADD COLUMN     "media_id" INTEGER NOT NULL,
ADD COLUMN     "media_type" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Media_media_type_media_id_listId_key" ON "Media"("media_type", "media_id", "listId");
