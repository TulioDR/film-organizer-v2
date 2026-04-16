export interface Media {
   id: number;
   adult: boolean;
   backdrop_path: string;
   genre_ids: number[];
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   first_air_date: string;
   title: string;
   name: string;
   vote_average: number;
   vote_count: number;
}

export interface SavedMedia {
   playlist_id: string;
   media_id: number;
   media_type: "movie" | "tv";
   title: string;
   poster_path: string;
   backdrop_path: string;
   overview: string;
   release_date: string;
}
