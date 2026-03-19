import React from "react";

type Props = {};

export default function ButtonText({}: Props) {
   return (
      <div className="uppercase text-2xl 2xl:text-3xl font-light">
         <div className="relative w-min opacity-60">
            Learn
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></div>
         </div>
         <div className="relative w-min">
            More
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></div>
         </div>
      </div>
   );
}
