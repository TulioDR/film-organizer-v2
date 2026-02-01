import API_PUBLIC from "@/api/public";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { isMediaTypeInvalid, isPageInvalid } from "./dataValidation";

type PageDataProps = any;

export const getMediaData = <TProps extends PageDataProps>() => {
   return async (
      context: GetServerSidePropsContext
   ): Promise<GetServerSidePropsResult<TProps>> => {
      const query = context.query;
      const media_type = query.media_type as string;

      if (isMediaTypeInvalid(media_type)) return { notFound: true };

      const page = Number(query.page);
      const validPage = isPageInvalid(page) ? "1" : query.page;
      const validSort = query.sort_by || "popularity.desc";

      if (!query.sort_by || isPageInvalid(page)) {
         const dest = `/${media_type}?sort_by=${validSort}&page=${validPage}`;
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
         const internalApiEndpoint = `/${media_type}/${filterString}&page=${page}`;

         const { data } = await API_PUBLIC.get(internalApiEndpoint);

         const response = { data, mediaType: media_type };
         return { props: response as TProps };
      } catch (error) {
         console.error("Error fetching data:", error);
         return { notFound: true };
      }
   };
};
