import API_PUBLIC from "@/api/public";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { isMediaTypeInvalid, isPageInvalid } from "./dataValidation";

type PageDataProps = any;

export const getDiscoverData = <TProps extends PageDataProps>() => {
   return async (
      context: GetServerSidePropsContext
   ): Promise<GetServerSidePropsResult<TProps>> => {
      const { query } = context;
      const media_type = query.media_type;

      if (typeof media_type !== "string") {
         const response = { data: null, mediaType: null };
         return { props: response as TProps };
      }

      if (isMediaTypeInvalid(media_type)) return { notFound: true };
      const page = Number(query.page);
      if (isPageInvalid(page)) return { notFound: true };

      try {
         const params = new URLSearchParams(query as any);
         params.delete("media_type");
         const api = `/discover/${media_type}/&${params.toString()}`;
         const { data } = await API_PUBLIC.get(api);
         const response = { data, mediaType: media_type };

         return { props: response as TProps };
      } catch (error) {
         console.error("Error fetching data:", error);
         return { notFound: true };
      }
   };
};
