import React from "react";
import LoadingSpinner from "../LoadingSpinner";

type Props = {
   front?: true;
   back?: true;
};

export default function PosterSpinner({ front, back }: Props) {
   return (
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black">
         <div
            className={`
                     ${front ? "w-2/5" : ""}
                     ${back ? "w-1/5" : ""}
                     ${!front || !back ? "w-1/5" : ""}
                  `}
         >
            <LoadingSpinner />
         </div>
      </div>
   );
}
