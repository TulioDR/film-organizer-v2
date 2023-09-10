import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      // Get all the media for the list
      const { list_id } = req.query;
      const response = await supabase.from("Media").select().match({ list_id });
      res.status(200).json(response);
   }
}
