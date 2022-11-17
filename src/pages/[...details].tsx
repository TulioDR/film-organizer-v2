import { AnimatePresence } from "framer-motion";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Date from "../components/details/Date";
import Rating from "../components/details/Rating";
import Runtime from "../components/details/Runtime";
import Score from "../components/details/Score";
import Similar from "../components/details/tabs/Similar";
import TabsContainer from "../components/details/TabsContainer";
import { TabOptions } from "../models/detailsModel";
import { motion } from "framer-motion";
import Trailers from "../components/details/tabs/Trailers";

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

   const [selectedTab, setSelectedTab] = useState<TabOptions>("overview");

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
         <div className="aspect-[2/3] flex-shrink-0 h-full relative rounded-xl overflow-hidden">
            <Image
               alt={media.name || media.title}
               src={`https://image.tmdb.org/t/p/w${780}${media.poster_path}`}
               placeholder="empty"
               fill
               sizes="100%"
               priority
            />
         </div>
         <div className="flex-1 h-full flex flex-col">
            <div className="text-4xl 2xl:text-5xl font-medium">
               {media.title || media.name}
            </div>
            <div className="flex justify-between items-center text-gray-500 mt-2 text-sm">
               <div className="flex items-center">
                  <Date date={media.first_air_date || media.release_date} />
                  <span className="mx-2">|</span>
                  {mediaType == "movie" && (
                     <>
                        <Runtime runtime={media.runtime} />
                        <span className="mx-2">|</span>
                     </>
                  )}
                  <Rating
                     rating={
                        media.release_dates?.results ||
                        media.content_ratings?.results
                     }
                     isMovie={mediaType === "movie"}
                  />
               </div>
               <Score score={media.vote_average} />
            </div>
            <TabsContainer
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
               isMovie={mediaType === "movie"}
            />
            <AnimatePresence mode="wait">
               <motion.div
                  key={selectedTab}
                  className="flex-1 w-full overflow-y-hidden"
               >
                  {selectedTab === "overview" && (
                     <div className="h-full w-full bg-blue-500"></div>
                  )}
                  {selectedTab === "seasons" && (
                     <div className="flex-1 w-full"></div>
                  )}
                  {selectedTab === "trailers" && (
                     <Trailers trailers={media.videos.results} />
                  )}
                  {selectedTab === "cast&crew" && (
                     <div className="flex-1 w-full">Cast and Crew</div>
                  )}
                  {selectedTab === "similar" && (
                     <Similar similar={media.similar.results} />
                  )}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
}
