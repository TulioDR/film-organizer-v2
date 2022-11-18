import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

import RevealHorizontal from "../animations/RevealHorizontal";
import MainPoster from "../components/details/MainPoster";
import InfoBar from "../components/details/infoBar/InfoBar";
import Tabs from "../components/details/tabs/Tabs";

export const getServerSideProps: GetServerSideProps = async (context) => {
   // if (!context.query.details) {
   //    return { notFound: true };
   // }

   const [type, id] = context.query.details!;
   const certifications =
      type === "movie" ? "release_dates" : "content_ratings";
   const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,credits,similar,${certifications}`;
   const res = await fetch(url);
   const media = await res.json();

   // if (media.status_code === 34) {
   //    return { notFound: true };
   // }

   return {
      props: { mediaType: type, id, media },
   };
};

type Props = {
   mediaType: string;
   id: number;
   media: any;
};

export default function details({ mediaType, id, media }: Props) {
   useEffect(() => {
      console.log(media);
   }, []);
   return (
      <div
         className="flex space-x-5 overflow-hidden"
         style={{ height: "calc(100vh - 96px)" }}
      >
         <Head>
            <title>{media.title || media.name}</title>
            <meta name="description" content={media.overview} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <MainPoster
            alt={media.name || media.title}
            posterPath={media.poster_path}
         />

         <div className="flex-1 overflow-hidden h-full flex flex-col">
            <RevealHorizontal>
               <div className="text-4xl 2xl:text-5xl font-medium">
                  {media.title || media.name}
               </div>
            </RevealHorizontal>
            <InfoBar media={media} mediaType={mediaType} />
            <Tabs media={media} mediaType={mediaType} />
         </div>
      </div>
   );
}
