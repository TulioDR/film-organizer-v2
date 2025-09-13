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
         const destination = isGenresPage
            ? `/${media_type}/${apiPath}/${query.genre_id}?page=1`
            : `/${media_type}/${apiPath}?page=1`;
         return { redirect: { destination, permanent: false } };
      }

      try {
         const api = isGenresPage
            ? `/${media_type}/${apiPath}/${query.genre_id}/${page}`
            : `/${media_type}/${apiPath}/${page}`;
         const { data } = await API_PUBLIC.get(api);

         const title = [
            media_type,
            {
               link: `/${media_type}/${apiPath}`,
               text: isGenresPage ? "Genres" : apiPath,
            },
            isGenresPage
               ? {
                    link: `/${media_type}/genres/${query.genre_id}`,
                    text:
                       media_type === "movie"
                          ? movieGenres.find(
                               (g) => g.id === Number(query.genre_id)
                            )?.name
                          : tvGenres.find(
                               (g) => g.id === Number(query.genre_id)
                            )?.name,
                 }
               : null,
         ];

         const response = { data, mediaType: media_type, title };

         return { props: response as TProps };
      } catch (error) {
         console.error("Error fetching data:", error);
         return { notFound: true };
      }
   };
};
