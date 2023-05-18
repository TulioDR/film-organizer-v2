import Head from "next/head";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

import MainPoster from "../../components/details/MainPoster";
import MainTitle from "../../components/details/MainTitle";
import Score from "@/components/details/infoBar/Score";
import Runtime from "@/components/details/infoBar/Runtime";
import BackgroundImage from "@/components/BackgroundImage";
import Date from "@/components/details/infoBar/Date";
import Rating from "@/components/details/infoBar/Rating";
import Overview from "@/components/details/tabs/overview/Overview";
import CastCrew from "@/components/details/tabs/people/CastCrew";
import Poster from "@/components/Poster";
import InfoSubtitle from "@/components/details/InfoSubtitle";
import Trailers from "@/components/details/tabs/Trailers";
import { useRouter } from "next/router";
import Seasons from "@/components/details/tabs/seasons/Seasons";

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
      const container = document.getElementById("scroll-container")!;
      container.scrollTo({ top: 0 });
      console.log(media);
   }, [media]);

   const separateByCommas = (array: any[], index: number): string => {
      if (index === array.length - 1) {
         return ".";
      } else return ",";
   };

   const separateArray = (array: any[]): JSX.Element[] => {
      return array.map((item, index) => (
         <span key={item.id} className="mr-2 inline-block">
            {item.name}
            {separateByCommas(array, index)}
         </span>
      ));
   };

   const router = useRouter();
   const goToSimilar = (id: number) => {
      router.push(`/${mediaType}/${id}`);
   };
   return (
      <div className="w-full">
         <BackgroundImage currentImg={media.backdrop_path} details />
         <Head>
            <title>{media.title || media.name}</title>
            <meta name="description" content={media.overview} />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="flex overflow-hidden h-[calc(100vh-96px)] pb-10 px-10">
            <MainPoster
               alt={media.name || media.title}
               posterPath={media.poster_path}
               media={media}
               mediaType={mediaType}
            />
            <div className="flex-1 overflow-hidden h-full flex flex-col gap-5 justify-center pl-10">
               <MainTitle>{media.title || media.name}</MainTitle>
               <div className="flex items-end gap-2">
                  <Date date={media.first_air_date || media.release_date} />
                  <span className="text-xl">○</span>
                  <Rating
                     rating={
                        media.release_dates?.results ||
                        media.content_ratings?.results
                     }
                     isMovie={mediaType === "movie"}
                  />
               </div>
               <div className="flex items-center gap-2 text-sm">
                  {mediaType == "movie" && (
                     <>
                        <Runtime runtime={media.runtime} />
                        <span className="text-xl">○</span>
                     </>
                  )}
                  <span>{separateArray(media.genres)}</span>
               </div>
               <Score score={media.vote_average} />
            </div>
         </div>
         <div className="backdrop-blur-md p-10 flex gap-10">
            <div className="flex-1 space-y-10 overflow-hidden">
               <Overview
                  tagline={media.tagline || null}
                  overview={media.overview}
                  genres={media.genres}
                  crew={media.created_by || media.credits.crew}
                  isMovie={mediaType === "movie"}
                  productionCompanies={media.production_companies}
                  spokenLanguages={media.spoken_languages}
                  seasons={media.number_of_seasons}
                  episodes={media.number_of_episodes}
                  networks={media.networks}
                  budget={media.budget}
                  revenue={media.revenue}
               />
               <CastCrew
                  cast={media.credits?.cast}
                  crew={media.credits?.crew}
               />
               {mediaType === "tv" && (
                  <Seasons
                     seasons={media.seasons}
                     // setSelectedSeason={setSelectedSeason}
                  />
               )}

               <Trailers trailers={media.videos.results} />
            </div>
            <div className="">
               <div className="space-y-5 border-l border-white pl-10">
                  <InfoSubtitle>Similar Movies</InfoSubtitle>
                  <div className="grid grid-cols-2 gap-5 ">
                     {media.similar.results.map((sim: any) => (
                        <article
                           onClick={() => goToSimilar(sim.id)}
                           key={sim.id}
                           className="cursor-pointer w-24 lg:w-28 xl:w-32"
                        >
                           <Poster
                              alt={sim.title || sim.name}
                              posterPath={sim.poster_path}
                              size="md"
                           />
                        </article>
                     ))}
                  </div>
               </div>
            </div>
            {/* <Tabs media={media} mediaType={mediaType} /> */}
         </div>
      </div>
   );
}
