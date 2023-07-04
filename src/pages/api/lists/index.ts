import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";
import { v4 as uuid } from "uuid";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const { authorId } = req.query;
      const response = await query(
         `
            SELECT * FROM lists
            WHERE author_id = ?
            ORDER BY created_at ASC
         `,
         [authorId]
      );
      res.status(200).json(response);
   }
   if (req.method === "POST") {
      const { name, authorId } = req.body;
      const response = await query(
         `
            INSERT INTO lists (id, name, author_id)
            VALUES (?, ?, ?)
         `,
         [uuid(), name, authorId]
      );
      res.status(200).json(response);
   }
}
