import React, { useEffect, useState } from "react";

import Poster from "@/components/Poster";
import Date from "@/components/MediaDetails/MainInfo/Date";

import EpisodeCard from "./EpisodeCard";
import CloseSeasonButton from "./CloseSeasonButton";
import SeasonTitle from "./SeasonTitle";
import SeasonOverview from "./SeasonOverview";
import SeasonSubtitle from "./SeasonSubtitle";
import SeasonLoadingAnimation from "./SeasonLoadingAnimation";
import SeasonModalContainer from "./SeasonModalContainer";
import API_PUBLIC from "@/api/public";
import Subtitle from "@/components/Subtitle";

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
         try {
            const url = `/season/${seriesID}/${seasonNumber}`;
            const { data } = await API_PUBLIC.get(url);
            console.log(data);
            setSeason(data);
         } catch (error) {
            console.log(error);
         }
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
                           <Subtitle>Overview</Subtitle>
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
