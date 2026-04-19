import { useEffect, useState } from "react";

import EpisodeCard from "./EpisodeCard";
import CloseSeasonButton from "./CloseSeasonButton";
import SeasonSubtitle from "./SeasonSubtitle";
import SeasonLoadingAnimation from "./SeasonLoadingAnimation";
import SeasonModalContainer from "./SeasonModalContainer";
import API_PUBLIC from "@/api/public";
import ReactLenis from "lenis/react";
import SeasonModalHeader from "./SeasonModalHeader";

type Props = {
   close: () => void;
   seriesID: number;
   seasonNumber: number;
};

export default function SeasonModal({ close, seriesID, seasonNumber }: Props) {
   const [season, setSeason] = useState<any>(null);

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
         <CloseSeasonButton onClick={close} />
         <ReactLenis className="w-full h-full overflow-y-auto">
            <div className="w-full p-4 xl:p-8 relative">
               {season ? (
                  <>
                     <SeasonModalHeader season={season} />
                     <div className="flex flex-col gap-4 pt-8">
                        <SeasonSubtitle>Episodes</SeasonSubtitle>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 xl:gap-4 w-full">
                           {season.episodes.map((ep: any) => (
                              <EpisodeCard key={ep.id} episode={ep} />
                           ))}
                        </div>
                     </div>
                  </>
               ) : (
                  <SeasonLoadingAnimation />
               )}
            </div>
         </ReactLenis>
      </SeasonModalContainer>
   );
}
