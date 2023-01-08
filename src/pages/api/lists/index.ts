import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const { authorId } = req.query;
      try {
         const lists = await prisma.list.findMany({
            where: { authorId: authorId as string },
            orderBy: [{ createdAt: "asc" }],
         });
         res.status(200).json(lists);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "POST") {
      try {
         const { name, authorId } = req.body;
         const list = await prisma.list.create({
            data: { name, authorId },
         });
         res.status(200).json(list);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
