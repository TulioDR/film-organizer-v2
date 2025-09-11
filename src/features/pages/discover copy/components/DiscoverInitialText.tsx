import React from "react";

type Props = {};

export default function DiscoverInitialText({}: Props) {
   return (
      <div className="flex flex-col items-center gap-2 text-sx sm:text-sm md:text-base">
         <div>Use the filters to search for media</div>
         <div className="flex items-center gap-2">
            You can open them by clicking the button
         </div>
         <button className="bg-secondary-light dark:bg-secondary-dark rounded-lg h-10 aspect-square grid place-content-center">
            <span
               style={{ fontVariationSettings: `"FILL" 1` }}
               className="material-symbols-outlined"
            >
               filter_alt
            </span>
         </button>
      </div>
   );
}
