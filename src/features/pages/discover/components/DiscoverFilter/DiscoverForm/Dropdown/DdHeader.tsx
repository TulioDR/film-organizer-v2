import React from "react";

type Props = { icon: string; title: string };

export default function DdHeader({ icon, title }: Props) {
   return (
      <div className="relative w-full flex flex-col items-center p-5 text-dark-1">
         <span className="material-symbols-outlined !text-4xl">{icon}</span>
         <span className="font-semibold font-title truncate uppercase">
            {title}
         </span>
      </div>
   );
}
