import API_PUBLIC from "@/api/public";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

type PageDataProps = {
   response: any;
};

export const getPageData = <TProps extends PageDataProps>(apiPath: string) => {
   return async (
      context: GetServerSidePropsContext
   ): Promise<GetServerSidePropsResult<TProps>> => {
      const { query } = context;

      const isGenresPage = apiPath === "genres";

      const media_type = query.media_type as "tv" | "movie";
      const isTypeInvalid = media_type !== "movie" && media_type !== "tv";
      if (isTypeInvalid) return { notFound: true };

      if (isGenresPage) {
         const genreId = Number(query.genre_id);
         if (isNaN(genreId)) return { notFound: true };

         const genres = media_type === "movie" ? movieGenres : tvGenres;
         const isGenreValid = genres.some((genre) => genre.id === genreId);
         if (!isGenreValid) return { notFound: true };
      }

      const page = Number(query.page);
      const isPageInvalid = !(page > 0 && page < 21 && Number.isInteger(page));

      if (isPageInvalid) {
         const destination = isGenresPage
            ? `/${media_type}/${apiPath}/${query.genre_id}?page=1`
            : `/${media_type}/${apiPath}?page=1`;

         return {
            redirect: { destination, permanent: false },
         };
      }

      try {
         const api = isGenresPage
            ? `/${media_type}/${apiPath}/${query.genre_id}/${page}`
            : `/${media_type}/${apiPath}/${page}`;
         const { data } = await API_PUBLIC.get(api);
         const response = { data, mediaType: media_type };

         return { props: { response } as TProps };
      } catch (error) {
         console.error("Error fetching data:", error);
         return { notFound: true };
      }
   };
};
