import React from "react";

type Props = {
   color: string;
};

export default function ColorIcon({ color }: Props) {
   return (
      <div
         style={{ backgroundColor: color }}
         className="h-full aspect-square rounded-full border-4 border-gray-400 dark:border-gray-600"
      ></div>
   );
}
