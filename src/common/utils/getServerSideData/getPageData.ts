import API_PUBLIC from "@/api/public";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { isMediaTypeInvalid, isPageInvalid } from "./dataValidation";

type PageDataProps = any;

export const getPageData = <TProps extends PageDataProps>(apiPath: string) => {
   return async (
      context: GetServerSidePropsContext
   ): Promise<GetServerSidePropsResult<TProps>> => {
      const { query } = context;
      const isGenresPage = !!query.genre_id;
      const isResultsPage = !!query.search_query;

      const media_type = query.media_type as string;

      if (isMediaTypeInvalid(media_type)) return { notFound: true };

      if (isGenresPage) {
         const genreId = Number(query.genre_id);
         if (isNaN(genreId)) return { notFound: true };

         const genres = media_type === "movie" ? movieGenres : tvGenres;
         const isGenreValid = genres.some((genre) => genre.id === genreId);
         if (!isGenreValid) return { notFound: true };
      }

      const page = Number(query.page);
      if (isPageInvalid(page)) {
         let dest: null | string = null;
         const mainPage = `/${media_type}/${apiPath}`;
         //
         dest = `/${media_type}?sort_by=popularity.desc&page=1`;

         return { redirect: { destination: dest, permanent: false } };
      }

      try {
         // let api: string | null = null;
         // const mainApi = `/${media_type}/${apiPath}`;
         // if (isResultsPage) api = `${mainApi}/${query.search_query}/${page}`;
         // else if (isGenresPage) api = `${mainApi}/${query.genre_id}/${page}`;
         // else api = `${mainApi}/${page}`;

         const oldApi = `/${media_type}/popular/${page}`;
         const params = new URLSearchParams(query as any);
         params.delete("media_type");
         const newApi = `/discover/${media_type}/&${params.toString()}`;
         console.log(newApi);
         const { data } = await API_PUBLIC.get(newApi);

         const response = { data, mediaType: media_type };

         return { props: response as TProps };
      } catch (error) {
         console.error("Error fetching data:", error);
         return { notFound: true };
      }
   };
};
