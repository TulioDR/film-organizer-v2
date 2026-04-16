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

   // --- POST: Save Media ---
   if (req.method === "POST") {
      try {
         const {
            playlist_id,
            media_id,
            media_type,
            title,
            poster_path,
            backdrop_path,
            overview,
            release_date,
         } = req.body;

         // 1. Upsert into 'media' table (The Library)
         // Use onConflict to update details if the movie already exists
         const { error: mediaError } = await supabase.from("media").upsert(
            {
               id: media_id, // Use TMDB ID as primary key
               title,
               poster_path,
               backdrop_path,
               overview,
               release_date,
               media_type,
            },
            { onConflict: "id" },
         );

         if (mediaError) throw mediaError;

         // 2. Insert into 'playlist_items' (The Link)
         const { data, error: linkError } = await supabase
            .from("playlist_items")
            .insert({
               playlist_id,
               media_id,
               media_type,
               user_id: userId,
            })
            .select()
            .single();

         if (linkError)
            return res.status(400).json({ error: linkError.message });

         return res.status(200).json(data);
      } catch (err: any) {
         console.error(err);
         return res
            .status(500)
            .json({ error: err.message || "Internal Server Error" });
      }
   }

   // --- DELETE: Remove from List ---
   if (req.method === "DELETE") {
      const { playlist_id, media_id } = req.body;
      const { data, error } = await supabase
         .from("playlist_items")
         .delete()
         .match({ playlist_id, media_id, user_id: userId });

      if (error) return res.status(400).json({ error: error.message });
      return res.status(200).json({ message: "Deleted successfully", data });
   }

   return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
