import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
// import BackgroundImage from "@/components/BackgroundImage";

import People from "@/components/MediaDetails/People";
import Seasons from "@/components/MediaDetails/Seasons";
import Similar from "@/components/MediaDetails/Similar";
import Trailers from "@/components/MediaDetails/Trailers";
import MainInfo from "@/components/MediaDetails/MainInfo";
import Overview from "@/components/MediaDetails/Overview";
import ScrollDownIcon from "@/components/MediaDetails/ScrollDownIcon";
import MainPoster from "@/components/MediaDetails/MainPoster";
import { useDispatch } from "react-redux";
import { backgroundActions } from "@/store/slices/background-slice";
import { MediaDetailsModel } from "@/models/MediaModel";

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
   const dispatch = useDispatch();

   useEffect(() => {
      const container = document.body;
      container.scrollTo({ top: 0 });
      const background = {
         backgroundImage: media.backdrop_path,
         backgroundKey: media.backdrop_path,
      };
      dispatch(backgroundActions.setBackground(background));
   }, [media, dispatch]);

   return (
      <div className="w-full">
         <Head>
            <title>{media.title || media.name}</title>
            <meta name="description" content={media.overview} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="md:flex overflow-hidden md:h-[calc(100vh-96px)] pb-10 px-10 relative">
            <MainPoster
               alt={media.name || media.title}
               posterPath={media.poster_path}
            />
            <MainInfo media={media} mediaType={mediaType} />
            <ScrollDownIcon />
         </div>
         <div className="backdrop-blur-md p-10 xl:flex gap-10">
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
            <div className="">
               <div className="mt-10 xl:mt-0 xl:border-l border-white xl:pl-10 w-full xl:w-80 2xl:w-96">
                  <Similar media={media} mediaType={mediaType} />
               </div>
            </div>
         </div>
      </div>
   );
}
