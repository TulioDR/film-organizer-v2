import { changeDateFormat, daysToRelease, isReleased } from "@/utils/date";
import React from "react";

type Props = {
   date: any;
};

export default function CardDate({ date }: Props) {
   return (
      <div className="h-10 flex-1 flex items-center justify-center rounded-lg bg-primary-light dark:bg-primary-dark text-light-1 dark:text-dark-1">
         <div className="text-xs sm:text-sm font-title ">
            {!date ? (
               <span>Release N/A</span>
            ) : (
               <>
                  <span>{changeDateFormat(date, true)}</span>
                  {!isReleased(date) && (
                     <span className="ml-1">
                        (in {daysToRelease(date)} days)
                     </span>
                  )}
               </>
            )}
         </div>
      </div>
   );
}
