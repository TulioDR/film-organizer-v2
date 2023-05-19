import InfoSubtitle from "../InfoSubtitle";
import SeasonCard from "./SeasonCard";

type Props = {
   seasons: any[];
};

export default function Seasons({ seasons }: Props) {
   const openSeasonInfo = (season: any) => {
      // setSelectedSeason(season.season_number);
   };
   return (
      <div>
         <InfoSubtitle>Seasons</InfoSubtitle>
         <div className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-5">
            {seasons.map((season) => (
               <SeasonCard
                  key={season.id}
                  season={season}
                  openSeasonInfo={openSeasonInfo}
               />
            ))}
         </div>
      </div>
   );
}
