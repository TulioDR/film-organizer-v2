import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";
import { v4 as uuid } from "uuid";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      try {
         const { list_id } = req.query;
         const media = await query(
            `
            SELECT * FROM media
            WHERE list_id = ?
            `,
            [list_id]
         );
         res.status(200).json(media);
      } catch (error: any) {
         res.json(error);
      }
   }
   if (req.method === "POST") {
      try {
         const { media_id, media_title, media_poster, media_type, list_id } =
            req.body;
         const result = await query(
            `
            INSERT INTO media (id, media_id, media_title, media_poster, media_type, list_id)
            VALUES (?, ?, ?, ?, ?, ?)
            `,
            [uuid(), media_id, media_title, media_poster, media_type, list_id]
         );
         res.status(200).json(result);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
   if (req.method === "DELETE") {
      try {
         const { list_id, media_id, media_type } = req.body;
         const result = await query(
            `
            DELETE FROM media
            WHERE list_id = ? AND media_id = ? AND media_type = ?
            `,
            [list_id, media_id, media_type]
         );
         res.status(200).json(result);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
