import React from "react";
import RevealHorizontal from "../../../../../animations/RevealHorizontal";
import Date from "../../../infoBar/Date";

type Props = {
   season: any;
};

export default function SeasonInfo({ season }: Props) {
   //Using the date component from media details info bar
   return (
      <RevealHorizontal stagger>
         <div className="flex items-center text-light-text-soft dark:text-dark-text-soft mt-3 text-sm">
            <Date date={season.air_date} />
            <span className="mx-2">|</span>
            <span>{season.episodes.length} episodes</span>
         </div>
      </RevealHorizontal>
   );
}
