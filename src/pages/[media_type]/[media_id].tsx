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
import BottomInfoContainer from "@/components/Pages/MediaDetails/BottomInfoContainer";

import useScrollToTop from "@/hooks/useScrollToTop";
import useBackground from "@/features/background/hooks/useBackground";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const { media_type, media_id } = context.query!;
   const certifications =
      media_type === "movie" ? "release_dates" : "content_ratings";
   const url = `https://api.themoviedb.org/3/${media_type}/${media_id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos,credits,similar,${certifications}`;
   const res = await fetch(url);
   const media = await res.json();

   if (media.status_code === 34) {
      return { notFound: true };
   }

   return {
      props: { media_type, media },
   };
};

type Props = {
   media_type: "tv" | "movie";
   media: MediaDetailsModel;
};

export default function Details({ media_type, media }: Props) {
   const { changeBackground } = useBackground();

   useScrollToTop();

   useEffect(() => {
      changeBackground(media);
   }, [media, changeBackground]);

   return (
      <div className="w-full">
         <Head>
            <title>{media.title || media.name}</title>
            <meta name="description" content={media.overview} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="md:flex md:h-[calc(100vh-160px)] relative mb-10 overflow-hidden">
            <MainPoster
               alt={media.name || media.title}
               posterPath={media.poster_path}
            />
            <MainInfo media={media} mediaType={media_type} />
            <ScrollDownIcon />
         </div>
         <BottomInfoContainer>
            <div className="flex-1 space-y-10 py-5 sm:py-10">
               <Overview
                  media={media}
                  crew={media.created_by || media.credits.crew}
                  isMovie={media_type === "movie"}
               />
               <People type="Cast" people={media.credits?.cast} />
               <People type="Crew" people={media.credits?.crew} />
               {media_type === "tv" && (
                  <Seasons seasons={media.seasons} seriesID={media.id} />
               )}
               <Trailers trailers={media.videos.results} />
            </div>
            <Similar media={media} mediaType={media_type} />
         </BottomInfoContainer>
      </div>
   );
}
