import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      try {
         const [media_id, media_type] = req.query.params!;
         const media = await query(
            `
            SELECT * FROM media
            WHERE media_id = ? AND media_type = ? LIMIT 1
         `,
            [media_id, media_type]
         );
         res.status(200).json(media);
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
