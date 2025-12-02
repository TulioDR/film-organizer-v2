import React from "react";

type Props = {};

export default function SmallFilter({}: Props) {
   return (
      <div className="w-full flex-1 p-4">
         <div className="w-full grid gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
               <div
                  key={index}
                  className={`bg-background-light h-40 dark:bg-background-dark rounded-md`}
               ></div>
            ))}
         </div>
      </div>
   );
}
