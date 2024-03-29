import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "POST") {
      const response = await supabase.from("Media").insert(req.body);
      res.status(200).json(response);
   }
   if (req.method === "DELETE") {
      const response = await supabase.from("Media").delete().match(req.body);
      res.status(200).json(response);
   }
}
