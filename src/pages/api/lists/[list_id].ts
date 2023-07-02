import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "PATCH") {
      const { name } = req.body;
      const { list_id } = req.query;
      try {
         const list = query(
            `
            UPDATE lists
            SET name = ?
            WHERE id = ?
         `,
            [name, list_id]
         );
         res.status(200).json(list);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "DELETE") {
      try {
         const { list_id } = req.query;
         const response = query(
            `
            DELETE FROM lists
            WHERE id = ?
         `,
            [list_id]
         );
         res.status(200).json(response);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
