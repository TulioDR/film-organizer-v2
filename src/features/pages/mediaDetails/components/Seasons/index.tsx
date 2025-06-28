import ModalPortal from "@/components/Modals/ModalPortal";

import SeasonCard from "./SeasonCard";
import { useState } from "react";

import SeasonModal from "@/features/modals/seasonModal/components/SeasonModal";
import InfoContainer from "../InfoContainer";

type Props = {
   seasons: any[];
   seriesID: number;
};

export default function Seasons({ seasons, seriesID }: Props) {
   const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

   return (
      <>
         <ModalPortal isOpen={selectedSeason !== null}>
            <SeasonModal
               close={() => setSelectedSeason(null)}
               seriesID={seriesID}
               seasonNumber={selectedSeason!}
            />
         </ModalPortal>
         <InfoContainer
            itemsPerPage={4}
            numberOfRows={2}
            columnLength={2}
            subtitle="Seasons"
            media={seasons}
            renderItem={(season) => (
               <SeasonCard
                  season={season}
                  onClick={() => setSelectedSeason(season.season_number)}
               />
            )}
         />
      </>
   );
}
