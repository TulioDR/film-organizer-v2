import API_PUBLIC from "@/api/public";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

type PageDataProps = {
   response: any;
};

export const getPageData = <TProps extends PageDataProps>(apiPath: string) => {
   return async (
      context: GetServerSidePropsContext
   ): Promise<GetServerSidePropsResult<TProps>> => {
      const { query } = context;

      const media_type = query.media_type as "tv" | "movie";
      const isTypeInvalid = media_type !== "movie" && media_type !== "tv";
      if (isTypeInvalid) {
         return { notFound: true };
      }

      const page = Number(query.page);
      const isPageInvalid = !(page > 0 && page < 21 && Number.isInteger(page));
      if (isPageInvalid) {
         if (apiPath === "genres") {
            return {
               redirect: {
                  destination: `/${media_type}/${apiPath}/${query.genre_id}?page=1`,
                  permanent: false,
               },
            };
         } else {
            return {
               redirect: {
                  destination: `/${media_type}/${apiPath}?page=1`,
                  permanent: false,
               },
            };
         }
      }

      try {
         if (apiPath === "genres") {
            const genre_id = query.genre_id;
            const api = `/${media_type}/${apiPath}/${genre_id}/${page}`;
            const { data } = await API_PUBLIC.get(api);

            const response = { data, mediaType: media_type };
            return { props: { response } as TProps };
         } else {
            const api = `/${media_type}/${apiPath}/${page}`;
            const { data } = await API_PUBLIC.get(api);

            const response = { data, mediaType: media_type };
            return { props: { response } as TProps };
         }
      } catch (error) {
         console.error("Error fetching data:", error);
         return { notFound: true };
      }
   };
};
