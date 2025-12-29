import API_PUBLIC from "@/api/public";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { isMediaTypeInvalid, isPageInvalid } from "./dataValidation";

type PageDataProps = any;

export const getPageData = <TProps extends PageDataProps>() => {
   return async (
      context: GetServerSidePropsContext
   ): Promise<GetServerSidePropsResult<TProps>> => {
      // const { query } = context;
      const query = context.query;
      const media_type = query.media_type as string;

      if (!query.sort_by && !query.page) {
         const dest = `/${media_type}?sort_by=popularity.desc&page=1`;
         return { redirect: { destination: dest, permanent: false } };
      }

      try {
         const filterParams = new URLSearchParams();

         Object.entries(query).forEach(([key, value]) => {
            if (key !== "media_type" && value) {
               filterParams.append(key, value.toString());
            }
         });

         const filterString = `&${filterParams.toString()}`;
         const internalApiEndpoint = `/${media_type}/${filterString}&page=1`;

         const { data } = await API_PUBLIC.get(internalApiEndpoint);

         const response = { data, mediaType: media_type };
         return { props: response as TProps };
      } catch (error) {
         console.error("Error fetching data:", error);
         return { notFound: true };
      }
   };
};
