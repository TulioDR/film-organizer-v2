import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "POST") {
      try {
         const { media_id, name, poster_path, media_type, listId } = req.body;
         const list = await prisma.media.create({
            data: { media_id, name, poster_path, media_type, listId },
         });
         res.status(200).json(list);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "DELETE") {
      try {
         const media = await prisma.media.deleteMany({
            where: { id: { in: req.body } },
         });
         res.status(200).json(media);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
