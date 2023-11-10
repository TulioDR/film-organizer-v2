import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      try {
         const [media_id, media_type] = req.query.params!;
         const response = await supabase
            .from("Media")
            .select()
            .match({ media_id, media_type })
            .limit(1);
         res.status(200).json(response);
      } catch (err) {
         console.log(err);
      }
   }
}
