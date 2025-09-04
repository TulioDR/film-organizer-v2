import API_PUBLIC from "@/api/public";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

type PageDataProps = {
   response: any;
};

export const getDiscoverData = <TProps extends PageDataProps>() => {
   return async (
      context: GetServerSidePropsContext
   ): Promise<GetServerSidePropsResult<TProps>> => {
      const { query } = context;

      const media_type = query.media_type;

      if (typeof media_type === "string") {
         // if media_type is a string check its validity
         const isTypeInvalid = media_type !== "movie" && media_type !== "tv";
         if (isTypeInvalid) return { notFound: true };

         try {
            let filters = "";
            Object.keys(query).forEach((key) => {
               if (query[key] && key !== "media_type") {
                  filters += `&${key}=${query[key]}`;
               }
            });
            const data = `/discover/${media_type}/${filters}`;
            // const api = "";
            // const { data } = await API_PUBLIC.get(api);
            return { props: { response: data } as TProps };
         } catch (error) {
            console.error("Error fetching data:", error);
            return { notFound: true };
         }
      } else {
         // if media_type is undefined
         const data = { results: [], total_pages: 1, page: 1 };
         return { props: { response: data } as TProps };
      }
   };
};
