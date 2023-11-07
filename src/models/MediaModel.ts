export interface MediaModel {
   id: number;
   adult: boolean;
   backdrop_path: string;
   genre_ids: number[];
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: Date;
   first_air_date: Date;
   title: string;
   name: string;
   vote_average: number;
   vote_count: number;
}

export interface SavedMediaModel {
   id?: string;
   media_id: number;
   media_title: string;
   media_poster: string;
   media_backdrop: string;
   media_overview: string;
   media_release_date: Date;
   media_type: "movie" | "tv";
   list_id: string;
}
