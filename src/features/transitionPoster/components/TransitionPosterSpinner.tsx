import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

type Props = {
   showSpinner: boolean;
};

export default function TransitionPosterSpinner({ showSpinner }: Props) {
   return (
      <div className="absolute top-0 left-0 w-full sm:w-auto aspect-square sm:aspect-auto sm:static sm:flex-1  sm:h-full flex items-center justify-center">
         {showSpinner && (
            <div className="w-1/2 sm:w-1/3">
               <LoadingSpinner />
            </div>
         )}
      </div>
   );
}
