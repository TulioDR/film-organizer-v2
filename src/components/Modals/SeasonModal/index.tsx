import { getSeason } from "@/api/media";
import CloseSeasonButton from "@/components/MediaDetails/Seasons/seasonDetails/CloseSeasonButton";
import SeasonLoadingAnimation from "@/components/MediaDetails/Seasons/seasonDetails/SeasonLoadingAnimation";
import SeasonOverview from "@/components/MediaDetails/Seasons/seasonDetails/SeasonOverview";
import SeasonSubtitle from "@/components/MediaDetails/Seasons/seasonDetails/SeasonSubtitle";
import SeasonTitle from "@/components/MediaDetails/Seasons/seasonDetails/SeasonTitle";
import EpisodeCard from "@/layout/cards/episodeCard/EpisodeCard";
import React, { useEffect, useState } from "react";
import SeasonModalContainer from "./SeasonModalContainer";
import Poster from "@/components/Poster";
import Date from "@/components/MediaDetails/MainInfo/Date";
import InfoSubtitle from "@/components/MediaDetails/InfoSubtitle";

type Props = {
   close: () => void;
   seriesID: number;
   seasonNumber: number;
};

export default function SeasonModal({ close, seriesID, seasonNumber }: Props) {
   const [season, setSeason] = useState<any>(null);
   useEffect(() => {
      console.log("initial");
   }, []);

   useEffect(() => {
      const getSeasonData = async () => {
         const seasonData = await getSeason(seriesID, seasonNumber);
         console.log(seasonData);
         setSeason(seasonData);
      };
      getSeasonData();
   }, [seriesID, seasonNumber]);

   return (
      <SeasonModalContainer close={close}>
         <div className="h-full w-full relative">
            <CloseSeasonButton onClick={close} />
            <div className="w-full overflow-y-auto h-full px-10 pb-40">
               {season ? (
                  <div className="w-full ">
                     <div className="">
                        <div className="flex gap-10 w-max mx-auto">
                           <div className="h-96">
                              <Poster
                                 posterPath={season.poster_path}
                                 size="lg"
                                 alt={season.name}
                              />
                           </div>
                           <div className="flex flex-col justify-center gap-1">
                              <SeasonTitle>{season.name}</SeasonTitle>
                              <Date date={season.air_date} />
                              <span>{season.episodes.length} episodes</span>
                           </div>
                        </div>
                        <div className="w-[600px] mx-auto mt-5">
                           <InfoSubtitle>Overview</InfoSubtitle>
                           <SeasonOverview overview={season.overview} />
                        </div>
                     </div>

                     <SeasonSubtitle>Episodes</SeasonSubtitle>
                     <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        {season.episodes.map((ep: any) => (
                           <EpisodeCard key={ep.id} episode={ep} />
                        ))}
                     </div>
                  </div>
               ) : (
                  <SeasonLoadingAnimation />
               )}
            </div>
         </div>
      </SeasonModalContainer>
   );
}
