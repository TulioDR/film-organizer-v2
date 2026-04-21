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
   const { playlist_id } = req.query; // Updated to match filename

   if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
   }

   if (req.method === "GET") {
      const { data, error } = await supabase
         .from("playlists")
         .select(
            `
                  *,
                  playlist_items (
                     id,
                     added_at,
                     media_type,
                     media:media_id (
                        *
                     )
                  )
               `,
         )
         .eq("id", playlist_id)
         .eq("user_id", userId)
         .single();
      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json(data);
   }

   if (req.method === "PATCH") {
      try {
         const { name, description } = req.body;

         if (name && name.length > 50) {
            return res
               .status(400)
               .json({ error: "Name must be 50 characters or less." });
         }
         if (description && description.length > 500) {
            return res
               .status(400)
               .json({ error: "Description must be 500 characters or less." });
         }

         const { data, error } = await supabase
            .from("playlists")
            .update({ name, description })
            .eq("id", playlist_id)
            .eq("user_id", userId)
            .select()
            .single();

         if (error) return res.status(400).json({ error: error.message });
         return res.status(200).json(data);
      } catch (error) {
         return res.status(500).json({ error: "Internal Server Error" });
      }
   }

   if (req.method === "DELETE") {
      try {
         const { error } = await supabase
            .from("playlists")
            .delete()
            .eq("id", playlist_id)
            .eq("user_id", userId);

         if (error) return res.status(400).json({ error: error.message });
         return res.status(200).json({ message: "Deleted successfully" });
      } catch (error) {
         return res.status(500).json({ error: "Internal Server Error" });
      }
   }

   return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
