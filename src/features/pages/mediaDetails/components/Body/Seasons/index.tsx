import SeasonCard from "./SeasonCard";
import { useState } from "react";

import InfoContainer from "../InfoContainer";
import ResponsiveConfig from "../../../models/ResponsiveConfig";
import SeasonModal from "./SeasonModal";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import Responsive from "@/common/components/Responsive";
import { MD_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";

type Props = {
   seasons: any[];
   seriesID: number;
};

export default function Seasons({ seasons, seriesID }: Props) {
   const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

   const responsiveConfigs: ResponsiveConfig[] = [
      { minWidth: MD_MEDIA_QUERY, itemsPerPage: 4, numberOfRows: 2 },
      { maxWidth: MD_MEDIA_QUERY, itemsPerPage: 2, numberOfRows: 2 },
   ];

   return (
      <>
         <ModalPortal isOpen={selectedSeason !== null}>
            <SeasonModal
               close={() => setSelectedSeason(null)}
               seriesID={seriesID}
               seasonNumber={selectedSeason!}
            />
         </ModalPortal>
         {responsiveConfigs.map((config, index) => (
            <Responsive key={index} {...config}>
               <InfoContainer
                  itemsPerPage={config.itemsPerPage}
                  numberOfRows={config.numberOfRows}
                  subtitle="Seasons"
                  className="xl:col-span-2"
                  media={seasons}
                  renderItem={(season) => (
                     <SeasonCard
                        season={season}
                        onClick={() => setSelectedSeason(season.season_number)}
                     />
                  )}
               />
            </Responsive>
         ))}
      </>
   );
}
