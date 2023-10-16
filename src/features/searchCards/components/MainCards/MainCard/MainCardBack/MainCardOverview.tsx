import React from "react";

type Props = {
   overview: string;
};

export default function MainCardOverview({ overview }: Props) {
   return (
      <div className="text-xs sm:text-sm text-light-2 dark:text-dark-2 leading-tight relative flex-1 overflow-hidden">
         <p>{overview}</p>
         <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-secondary-light dark:from-secondary-dark to-transparent" />
      </div>
   );
}
