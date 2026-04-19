import Poster from "@/common/components/Poster";
import SeasonTitle from "../../SeasonTitle";
import Date from "../../../../../Header/HeaderData/Date";
import SeasonSubtitle from "../../SeasonSubtitle";
import SeasonOverview from "../../SeasonOverview";
type Props = { season: any };

export default function Desktop({ season }: Props) {
   return (
      <div className="flex pl-20 gap-8 w-full items-center">
         <div className="h-96 aspect-[2/3]">
            <Poster posterPath={season.poster_path} alt={season.name} />
         </div>
         <div className="flex flex-col justify-center gap-1">
            <SeasonTitle>{season.name}</SeasonTitle>
            <div className="flex gap-4">
               <Date date={season.air_date} />
               <span>-</span>
               <span>{season.episodes.length} episodes</span>
            </div>
            <div className="flex flex-col gap-1 pt-4">
               <SeasonSubtitle>Overview</SeasonSubtitle>
               <SeasonOverview overview={season.overview} />
            </div>
         </div>
      </div>
   );
}
