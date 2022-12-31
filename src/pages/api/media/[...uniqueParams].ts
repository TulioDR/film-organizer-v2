import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      try {
         const [listId, media_id, media_type] = req.query.uniqueParams as [
            string,
            string,
            string
         ];
         const media = await prisma.media.findUnique({
            where: {
               media_type_media_id_listId: {
                  listId,
                  media_id: Number(media_id),
                  media_type,
               },
            },
         });
         res.status(200).json(media);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "DELETE") {
      try {
         const [listId, media_id, media_type] = req.query.uniqueParams as [
            string,
            string,
            string
         ];
         const media = await prisma.media.delete({
            where: {
               media_type_media_id_listId: {
                  listId,
                  media_id: Number(media_id),
                  media_type,
               },
            },
         });
         res.status(200).json(media);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
