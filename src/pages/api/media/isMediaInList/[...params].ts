import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "@/config/db";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const [list_id, media_id, media_type] = req.query.params!;
      const media = await query(
         `
            SELECT * FROM media
            WHERE list_id = ? AND media_id = ? AND media_type = ?
         `,
         [list_id, media_id, media_type]
      );
      res.status(200).json(media);
   }
}
