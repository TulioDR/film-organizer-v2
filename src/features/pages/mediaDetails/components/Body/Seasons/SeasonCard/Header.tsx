import { changeDateFormat } from "@/utils/date";
import React from "react";

type Props = {
   season: any;
};

export default function Header({ season }: Props) {
   return (
      <div className="w-full overflow-hidden">
         <div className="text-lg md:text-xl lg:text-2xl font-bold truncate w-full">
            {season.name}
         </div>
         <div className="flex text-xs items-center text-gray-700 my-1">
            <div>{changeDateFormat(season.air_date) || "N/A"}</div>
            <div className="mx-2">|</div>
            <div>{season.episode_count} Episodes</div>
         </div>
      </div>
   );
}
