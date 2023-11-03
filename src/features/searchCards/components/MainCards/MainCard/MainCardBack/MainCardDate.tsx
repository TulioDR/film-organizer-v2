import { changeDateFormat, daysToRelease, isReleased } from "@/utils/date";
import React from "react";

type Props = {
   date: any;
};

export default function MainCardDate({ date }: Props) {
   if (!date) return <div>N/A</div>;
   return (
      <div className="text-xs sm:text-sm text-center sm:text-left">
         <span>{changeDateFormat(date, true)}</span>
         {!isReleased(date) && (
            <span className="ml-1">(in {daysToRelease(date)} days)</span>
         )}
      </div>
   );
}
