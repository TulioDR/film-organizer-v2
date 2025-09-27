import Link from "next/link";
import React from "react";

type Props = {
   href?: string;
   text: string;
   dropdown?: true;
   icon: string;
   onClick?: () => void;
};

export default function MenuItem({
   href,
   text,
   icon,
   dropdown,
   onClick,
}: Props) {
   return (
      <div className="h-14 font-bold text-lg flex gap-4 items-center w-64">
         <div className="h-full aspect-square bg-white text-black shadow-md rounded-md overflow-hidden">
            {href ? (
               <Link
                  href={href}
                  scroll={false}
                  className="h-full w-full flex items-center justify-center"
               >
                  <span className="material-symbols-outlined">{icon}</span>
               </Link>
            ) : (
               <button
                  onClick={onClick}
                  className="h-full w-full flex items-center justify-center"
               >
                  <span className="material-symbols-outlined">{icon}</span>
               </button>
            )}
         </div>

         <span className="flex-1 text-sm">{text}</span>
         {dropdown && (
            <button
               onClick={onClick}
               className="h-full bg-white text-black shadow-md flex items-center justify-center rounded-md aspect-square"
            >
               <span className="material-symbols-outlined">chevron_right</span>
            </button>
         )}
      </div>
   );
}
