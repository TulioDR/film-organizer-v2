import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

type Props = {
   showSpinner: boolean;
};

export default function TransitionPosterSpinner({ showSpinner }: Props) {
   return (
      <div className="flex-1 h-full flex items-center justify-center">
         {showSpinner && (
            <div className="w-1/2">
               <LoadingSpinner />
            </div>
         )}
      </div>
   );
}
