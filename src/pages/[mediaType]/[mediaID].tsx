import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import MainPoster from "../../components/details/MainPoster";
import InfoBar from "../../components/details/infoBar/InfoBar";
import Tabs from "../../components/details/tabs/Tabs";
import TransitionPoster from "../../animations/TransitionPoster";
import MainTitle from "../../components/details/MainTitle";
import ExitDetails from "../../animations/ExitDetails";
import InfoBarMobile from "../../components/details/infoBar/InfoBarMobile";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { mediaType, mediaID } = context.query!;
   const certifications =
      mediaType === "movie" ? "release_dates" : "content_ratings";
   const url = `https://api.themoviedb.org/3/${mediaType}/${mediaID}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,credits,similar,${certifications}`;
   const res = await fetch(url);
   const media = await res.json();

   if (media.status_code === 34) {
      return { notFound: true };
   }

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
      <ExitDetails selectedImg={selectedImg}>
         <Head>
            <title>{media.title || media.name}</title>
            <meta name="description" content={media.overview} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="flex flex-col xl:flex-row xl:h-full xl:space-x-5 space-y-5 xl:space-y-0 overflow-hidden">
            <div className="sm:flex xl:block xl:h-full xl:aspect-[2/3] xl:flex-shrink-0">
               <MainPoster
                  alt={media.name || media.title}
                  posterPath={media.poster_path}
               />
               <div className="xl:hidden mt-5 sm:mt-0 sm:ml-5">
                  <MainTitle>{media.title || media.name}</MainTitle>
                  <InfoBarMobile media={media} mediaType={mediaType} />
               </div>
            </div>
            <div className="xl:flex-1 overflow-hidden h-full flex flex-col relative">
               <div className="hidden xl:block">
                  <MainTitle>{media.title || media.name}</MainTitle>
                  <InfoBar media={media} mediaType={mediaType} />
               </div>
               <Tabs
                  setSelectedImg={setSelectedImg}
                  media={media}
                  mediaType={mediaType}
               />
            </div>
         </div>
         <TransitionPoster selectedImg={selectedImg} />
      </ExitDetails>
   );
}
