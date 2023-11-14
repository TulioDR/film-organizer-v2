import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "DELETE") {
      try {
         const idsArray = req.body;
         const response = await supabase
            .from("Media")
            .delete()
            .in("id", idsArray);
         res.status(200).json(response);
      } catch (err) {
         console.log(err);
      }
   }
}
