import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";
import { SavedMediaModel } from "@/models/MediaModel";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "POST") {
      const newMedia: SavedMediaModel = req.body as SavedMediaModel;
      const { status } = await supabase.from("Media").insert(newMedia);
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
