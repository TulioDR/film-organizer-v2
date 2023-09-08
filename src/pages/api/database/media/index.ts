import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      const { list_id } = req.query;
      // const media = await query(
      //    `
      //       SELECT * FROM media
      //       WHERE list_id = ?
      //       `,
      //    [list_id]
      // );
      res.status(200).json([]);
   }
   if (req.method === "POST") {
      console.log("post");
      const { id, media_id, media_title, media_poster, media_type, list_id } =
         req.body;
      const { status } = await supabase.from("Media").insert({
         id,
         media_id,
         name: media_title,
         poster_path: media_poster,
         media_type,
         listId: list_id,
      });
      res.status(200).json(status);
   }
   if (req.method === "DELETE") {
      // const { list_id, media_id, media_type } = req.body;
      // const result = await query(
      //    `
      //       DELETE FROM media
      //       WHERE list_id = ? AND media_id = ? AND media_type = ?
      //    `,
      //    [list_id, media_id, media_type]
      // );
      res.status(200).json([]);
   }
}
