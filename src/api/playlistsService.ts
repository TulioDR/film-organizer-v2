export const fetchPlaylistsData = async (
   supabase: any,
   userId: string,
   preview: boolean,
) => {
   let query = supabase.from("playlists").select("*").eq("user_id", userId);

   if (preview) {
      query = supabase
         .from("playlists")
         .select(
            `
            *,
            playlist_items (
               media_type,
               media:media_id (
                  poster_path,
                  title
               )
            )
         `,
         )
         .eq("user_id", userId);
   }

   const { data, error } = await query;

   if (error) {
      console.error("Supabase Query Error:", error.message);
      throw error;
   }

   return data;
};

export const fetchSinglePlaylistWithMedia = async (
   supabase: any,
   playlistId: string,
   userId: string, // Add this parameter
) => {
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
      .eq("id", playlistId)
      .eq("user_id", userId) // Add this security check
      .single();

   if (error) throw error;
   return data;
};
