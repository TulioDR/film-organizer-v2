import React from "react";
import CardOverview from "./CardOverview";
import CardBackTitle from "./CardBackTitle";

type Props = {
   title: string;
   overview: string;
};

export default function BackBody({ title, overview }: Props) {
   return (
      <div className="overflow-hidden space-y-2 pt-2 sm:pt-8 flex-1 relative">
         <CardBackTitle>{title}</CardBackTitle>
         <CardOverview overview={overview} />
         <div className="absolute bottom-0 w-full h-5 sm:h-10 bg-gradient-to-t from-secondary-light dark:from-secondary-dark to-transparent" />
      </div>
   );
}
