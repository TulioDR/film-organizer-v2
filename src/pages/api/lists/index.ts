import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
   _req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      const lists = await prisma.list.findMany();
      res.status(200).json(lists);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
