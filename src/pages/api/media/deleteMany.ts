import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "DELETE") {
      try {
         const array = req.body.map((id: string) => `'${id}'`);
         const string = array.join(", ");
         const result = await query(
            `
            DELETE FROM media
            WHERE id IN (${string})
            `
         );
         res.status(200).json(result);
      } catch (error: any) {
         res.status(404).json(error);
         console.log(error);
      }
   }
}
