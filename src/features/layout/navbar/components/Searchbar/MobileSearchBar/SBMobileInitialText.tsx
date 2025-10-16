import React from "react";

type Props = {};

export default function SBMobileInitialText({}: Props) {
   return (
      <div className="h-16 flex items-center justify-center">
         <span className="text-center text-black/90">
            Start typing to see results
         </span>
      </div>
   );
}
