import React from "react";

type Props = {
   overview: string;
};

export default function CardOverview({ overview }: Props) {
   return (
      <div className="hidden sm:block text-xs sm:text-sm text-light-2 dark:text-dark-2 leading-tight relative flex-1 overflow-hidden">
         <p>{overview}</p>
      </div>
   );
}
