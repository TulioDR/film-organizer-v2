import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";
import { v4 as uuid } from "uuid";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const { authorId } = req.query;
      try {
         const lists = await query(`
            SELECT * FROM lists
            ORDER BY created_at ASC
         `);
         res.status(200).json(lists);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "POST") {
      try {
         const { name, authorId } = req.body;
         const result = await query(
            `
            INSERT INTO lists (id, name, author_id)
            VALUES (?, ?, ?)
         `,
            [uuid(), name, authorId]
         );
         res.status(200).json(result);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
