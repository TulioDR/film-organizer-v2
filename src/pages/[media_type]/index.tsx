import PageHead from "@/common/components/PageHead";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import Desktop from "@/features/pages/media-type/components/Desktop";
import Mobile from "@/features/pages/media-type/components/Mobile";
import { getMediaData } from "@/features/pages/media-type/utils/getMediaData";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = getMediaData();

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MediaType(response: Props) {
   const { mediaType } = response;

   const title = mediaType === "movie" ? "Movies" : "Series";

   useEffect(() => {
      console.log(response.data.results);
   }, [response]);

   return (
      <>
         <PageHead title={title} />

         <Responsive minWidth={XL_MEDIA_QUERY}>
            <Desktop response={response} />
         </Responsive>

         <Responsive maxWidth={XL_MEDIA_QUERY}>
            <Mobile response={response} />
         </Responsive>
      </>
   );
}
