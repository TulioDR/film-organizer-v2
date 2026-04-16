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

   if (!userId) return res.status(200).json({ isSaved: false });

   if (req.method === "GET") {
      try {
         const [media_id, media_type] = req.query.params as string[];

         const { data, error } = await supabase
            .from("playlist_items")
            .select("id")
            .match({
               media_id,
               media_type,
               user_id: userId,
            })
            .limit(1);

         if (error) return res.status(400).json({ error: error.message });

         return res.status(200).json({ isSaved: !!data?.length });
      } catch (err) {
         return res.status(500).json({ error: "Internal Server Error" });
      }
   }
}
