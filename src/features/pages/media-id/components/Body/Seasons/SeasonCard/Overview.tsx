import React from "react";

type Props = { season: any };

export default function Overview({ season }: Props) {
   return (
      <div className="text-gray-700 text-xs 2xl:text-sm flex-1 overflow-hidden relative hidden sm:block">
         <div className="absolute top-0 left-0 w-full">
            {season.overview || "No overview available for this season"}
         </div>
         <div className="h-1/5 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0" />
      </div>
   );
}
