import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { MediaDetailsModel } from "@/models/MediaModel";

import People from "@/components/Pages/MediaDetails/People";
import Seasons from "@/components/Pages/MediaDetails/Seasons";
import Similar from "@/components/Pages/MediaDetails/Similar";
import Trailers from "@/components/Pages/MediaDetails/Trailers";
import MainInfo from "@/components/Pages/MediaDetails/MainInfo";
import Overview from "@/components/Pages/MediaDetails/Overview";
import ScrollDownIcon from "@/components/Pages/MediaDetails/ScrollDownIcon";
import MainPoster from "@/components/Pages/MediaDetails/MainPoster";
import SimilarContainer from "@/components/Pages/MediaDetails/Similar/SimilarContainer";
import BottomInfoContainer from "@/components/Pages/MediaDetails/BottomInfoContainer";
import useBackground from "@/hooks/useBackground";

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
   media: MediaDetailsModel;
};

export default function Details({ mediaType, media }: Props) {
   const { changeBackground } = useBackground();

   useEffect(() => {
      changeBackground(media);
   }, [media, changeBackground]);
   useEffect(() => {
      document.body.scrollTo({ top: 0 });
   }, []);

   return (
      <div className="w-full">
         <Head>
            <title>{media.title || media.name}</title>
            <meta name="description" content={media.overview} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="md:flex overflow-hidden md:h-[calc(100vh-140px)] relative mb-10">
            <MainPoster
               alt={media.name || media.title}
               posterPath={media.poster_path}
            />
            <MainInfo media={media} mediaType={mediaType} />
            <ScrollDownIcon />
         </div>
         <BottomInfoContainer>
            <div className="flex-1 space-y-10 overflow-hidden">
               <Overview
                  media={media}
                  crew={media.created_by || media.credits.crew}
                  isMovie={mediaType === "movie"}
               />
               <People type="Cast" people={media.credits?.cast} />
               <People type="Crew" people={media.credits?.crew} />
               {mediaType === "tv" && (
                  <Seasons seasons={media.seasons} seriesID={media.id} />
               )}
               <Trailers trailers={media.videos.results} />
            </div>
            <SimilarContainer>
               <Similar media={media} mediaType={mediaType} />
            </SimilarContainer>
         </BottomInfoContainer>
      </div>
   );
}
