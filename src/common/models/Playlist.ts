import { Media } from "./Media";

export default interface Playlist {
   id: string;
   user_id: string;
   name: string;
   description?: string;
   created_at: string;
}

export interface PlaylistWithItems extends Playlist {
   playlist_items: {
      media_type: "movie" | "tv";
      media: {
         title: string;
         poster_path: string | null;
      };
   }[];
}
export interface PlaylistDetails extends Playlist {
   playlist_items: {
      media_type: "movie" | "tv";
      media: Media;
   }[];
}
