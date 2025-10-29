import React from "react";

type Props = {};

export default function ReelItem({}: Props) {
   return (
      <div className="flex w-full gap-3">
         {Array.from({ length: 7 }).map((_, idx) => (
            <div
               key={idx}
               className="w-3 aspect-[2/3] bg-background-light dark:bg-background-dark"
            ></div>
         ))}
      </div>
   );
}
