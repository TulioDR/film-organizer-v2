import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      try {
         const [media_id, media_type] = req.query.params as [string, string];
         const media = await prisma.media.findFirst({
            where: {
               media_id: Number(media_id),
               media_type,
            },
         });
         res.status(200).json(media);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
