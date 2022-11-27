import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import MainPoster from "../../components/details/MainPoster";
import RevealHorizontal from "../../animations/RevealHorizontal";
import InfoBar from "../../components/details/infoBar/InfoBar";
import Tabs from "../../components/details/tabs/Tabs";
import TransitionPoster from "../../animations/TransitionPoster";

export const getServerSideProps: GetServerSideProps = async (context) => {
   // if (!context.query.details) {
   //    return { notFound: true };
   // }

   // return { notFound: true };
   const { mediaType, mediaID } = context.query!;
   const certifications =
      mediaType === "movie" ? "release_dates" : "content_ratings";
   const url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,credits,similar,${certifications}`;
   const res = await fetch(url);
   const media = await res.json();

   // if (media.status_code === 34) {
   //    return { notFound: true };
   // }

   return {
      props: { mediaType, media },
   };
};

type Props = {
   mediaType: "tv" | "movie";
   media: any;
};

export default function Details({ mediaType, media }: Props) {
   useEffect(() => {
      console.log(media);
   }, [media]);

   const [selectedImg, setSelectedImg] = useState<string | null>(null);
   return (
      <motion.div
         exit={
            selectedImg
               ? {
                    opacity: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                 }
               : {}
         }
         className="w-full"
         style={{ height: "calc(100vh - 96px)" }}
      >
         <Head>
            <title>{media.title || media.name}</title>
            <meta name="description" content={media.overview} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="flex h-full space-x-5 overflow-hidden">
            <MainPoster
               alt={media.name || media.title}
               posterPath={media.poster_path}
            />
            <div className="flex-1 overflow-hidden h-full flex flex-col relative">
               <RevealHorizontal>
                  <div className="text-4xl 2xl:text-5xl font-medium">
                     {media.title || media.name}
                  </div>
               </RevealHorizontal>
               <InfoBar media={media} mediaType={mediaType} />
               <Tabs
                  setSelectedImg={setSelectedImg}
                  media={media}
                  mediaType={mediaType}
               />
            </div>
         </div>

         <TransitionPoster selectedImg={selectedImg} />
      </motion.div>
   );
}
