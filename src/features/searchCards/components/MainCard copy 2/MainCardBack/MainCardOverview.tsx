import React from "react";

type Props = {
   overview: string;
};

export default function MainCardOverview({ overview }: Props) {
   return (
      <div className="text-sm text-light-1 dark:text-dark-1 leading-tight">
         {overview}
      </div>
   );
}
