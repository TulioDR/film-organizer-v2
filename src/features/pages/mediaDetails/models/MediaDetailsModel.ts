import { Media } from "@/common/models/Media";

export interface MediaDetailsModel extends Media {
   budget: number;
   created_by: any[];
   seasons?: any;
   credits: {
      cast: Cast[];
      crew: Cast[];
   };
   genres: Genre[];
   production_companies: ProductionCompany[];
   production_countries: ProductionCountry[];
   release_dates: any;
   content_ratings: any;
   revenue: number;
   runtime: number;
   similar: Similar;
   spoken_languages: SpokenLanguage[];
   status: string;
   tagline: string;
   videos: {
      results: Video[];
   };
}

interface Cast {
   adult: boolean;
   cast_id?: number;
   character?: string;
   credit_id: string;
   gender: number;
   id: number;
   job?: string;
   name: string;
   order?: number;
   original_name: string;
   popularity: number;
   profile_path: null | string;
}

interface ProductionCompany {
   id: number;
   logo_path: string;
   name: string;
   origin_country: string;
}

interface ProductionCountry {
   iso_3166_1: string;
   name: string;
}

interface Similar {
   page: number;
   results: Media[];
   total_pages: number;
   total_results: number;
}

interface SpokenLanguage {
   english_name: string;
   iso_639_1: string;
   name: string;
}
interface Genre {
   id: number;
   name: string;
}
export interface Video {
   id: string;
   iso_3166_1: any;
   iso_639_1: string;
   key: string;
   name: string;
   official: boolean;
   published_at: Date;
   size: number;
}
