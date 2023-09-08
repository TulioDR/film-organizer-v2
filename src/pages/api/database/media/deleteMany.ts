import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "DELETE") {
      const array = req.body.map((id: string) => `'${id}'`);
      const string = array.join(", ");
      const result = await query(`
         DELETE FROM media
         WHERE id IN (${string})
      `);
      res.status(200).json(result);
   }
}
