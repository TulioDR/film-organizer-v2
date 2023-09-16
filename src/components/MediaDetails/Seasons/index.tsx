import ModalPortal from "@/components/Modals/ModalPortal";

import SeasonCard from "./SeasonCard";
import { useState } from "react";
import SeasonModal from "@/components/Modals/SeasonModal";
import Subtitle from "@/components/Subtitle";

type Props = {
   seasons: any[];
   seriesID: number;
};

export default function Seasons({ seasons, seriesID }: Props) {
   const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

   return (
      <div>
         <ModalPortal isOpen={selectedSeason !== null}>
            <SeasonModal
               close={() => setSelectedSeason(null)}
               seriesID={seriesID}
               seasonNumber={selectedSeason!}
            />
         </ModalPortal>
         <Subtitle>Seasons</Subtitle>
         <div className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-5">
            {seasons.map((season) => (
               <SeasonCard
                  key={season.id}
                  season={season}
                  onClick={() => setSelectedSeason(season.season_number)}
               />
            ))}
         </div>
      </div>
   );
}
