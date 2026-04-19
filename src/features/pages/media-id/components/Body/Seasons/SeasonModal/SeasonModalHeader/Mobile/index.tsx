import Poster from "@/common/components/Poster";
import SeasonTitle from "../../SeasonTitle";
import Date from "@/features/pages/media-id/components/Header/HeaderData/Date";
import SeasonSubtitle from "../../SeasonSubtitle";
import SeasonOverview from "../../SeasonOverview";
import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   season: any;
};

export default function Mobile({ season }: Props) {
   return (
      <div className="flex flex-col gap-4 w-full">
         <div className="pl-16">
            <div
               style={{ borderRadius: STANDARD_RADIUS }}
               className="w-full aspect-[2/3] overflow-hidden"
            >
               <Poster posterPath={season.poster_path} alt={season.name} />
            </div>
         </div>
         <div className="flex flex-col gap-1 w-full">
            <SeasonTitle>{season.name}</SeasonTitle>
            <div className="flex gap-2">
               <Date date={season.air_date} />
               <span>-</span>
               <span>{season.episodes.length} episodes</span>
            </div>
         </div>
         <div className="flex flex-col gap-1 pt-4">
            <SeasonSubtitle>Overview</SeasonSubtitle>
            <SeasonOverview overview={season.overview} />
         </div>
      </div>
   );
}
