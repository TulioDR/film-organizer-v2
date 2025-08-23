import React from "react";
import Reel from "@/features/layout/loader/components/Reel";

type Props = {
   front?: true;
   back?: true;
};

export default function PosterSpinner({ front, back }: Props) {
   return (
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center z-10">
         <div
            className={`
                     ${front ? "w-2/4" : ""}
                     ${back ? "w-1/5" : ""}
                     ${!front && !back ? "w-1/5" : ""}
                  `}
         >
            <Reel spin />
         </div>
      </div>
   );
}
