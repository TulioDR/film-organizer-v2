import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      try {
         const media = await prisma.media.findMany({
            where: {
               listId: req.query.listId as string,
            },
         });
         res.status(200).json(media);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
