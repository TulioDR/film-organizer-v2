import type { NextApiRequest, NextApiResponse } from "next";
import { createClerkSupabaseClient } from "@/lib/supabaseClient";
import { getAuth } from "@clerk/nextjs/server";

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
      const { preview } = req.query;

      let query = supabase.from("playlists").select("*").eq("user_id", userId);

      if (preview) {
         query = supabase
            .from("playlists")
            .select(
               `
                  *,
                  playlist_items (
                     media_type,
                     media (
                     poster_path
                     )
                  )
               `,
            )
            .eq("user_id", userId);
      }

      const { data, error } = await query;

      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json(data);
   }

   if (req.method === "POST") {
      try {
         const { name, description } = req.body;

         if (!name || name.length > 50) {
            return res.status(400).json({
               error: "Name is required and must be under 50 characters.",
            });
         }

         if (description && description.length > 500) {
            return res
               .status(400)
               .json({ error: "Description must be under 500 characters." });
         }

         const { data, error } = await supabase
            .from("playlists")
            .insert({
               name,
               description,
               user_id: userId,
            })
            .select()
            .single();

         if (error) return res.status(400).json({ error: error.message });
         return res.status(201).json(data);
      } catch (error) {
         return res.status(500).json({ error: "Internal Server Error" });
      }
   }

   return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
