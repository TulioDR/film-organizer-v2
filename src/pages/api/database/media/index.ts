import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "POST") {
      const { id, media_id, media_title, media_poster, media_type, list_id } =
         req.body;
      const { status } = await supabase.from("Media").insert({
         id,
         media_id,
         media_title,
         media_poster,
         media_type,
         list_id,
      });
      res.status(200).json(status);
   }
   if (req.method === "DELETE") {
      const { list_id, media_id, media_type } = req.body;
      const { status } = await supabase
         .from("Media")
         .delete()
         .match({ list_id, media_id, media_type });
      res.status(200).json(status);
   }
}
