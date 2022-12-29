import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "PUT") {
      try {
         const list = await prisma.list.update({
            where: {
               id: req.query.listId as string,
            },
            data: { name: req.body.name },
         });
         res.status(200).json(list);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "DELETE") {
      try {
         const list = await prisma.list.delete({
            where: {
               id: req.query.listId as string,
            },
         });
         res.status(200).json(list);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "GET") {
      // try {
      //    const list = await prisma.list.create({
      //       data: { name: req.body.listName },
      //    });
      //    res.status(200).json(list);
      // } catch (error: any) {
      //    res.status(404).json(error);
      // }
   }
}
