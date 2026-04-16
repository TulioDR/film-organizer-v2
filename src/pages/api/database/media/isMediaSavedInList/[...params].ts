import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { createClerkSupabaseClient } from "@/lib/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse,
) {
   const session = getAuth(req);
   const supabase = createClerkSupabaseClient(session);
   const userId = session.userId;

   if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
   }

   if (req.method === "GET") {
      try {
         const [playlist_id, media_id, media_type] = req.query
            .params as string[];
         const { data, error } = await supabase
            .from("playlist_items")
            .select("id")
            .match({
               playlist_id,
               media_id,
               media_type,
               user_id: userId,
            });

         if (error) {
            console.error("Supabase Error:", error);
            return res.status(400).json({ data: [], error: error.message });
         }

         return res.status(200).json(data);
      } catch (err) {
         console.error(err);
         return res.status(500).json({ error: "Internal Server Error" });
      }
   }

   return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
