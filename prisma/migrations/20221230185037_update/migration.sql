-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_listId_fkey";

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE CASCADE ON UPDATE CASCADE;
