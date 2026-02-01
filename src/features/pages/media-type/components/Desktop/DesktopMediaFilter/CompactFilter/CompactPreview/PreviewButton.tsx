import React from "react";

type Props = {
   icon: string;
   text: string;
   vertical?: true;
   square?: true;
   onClick: () => void;
};

export default function PreviewButton({
   icon,
   vertical,
   text,
   square,
   onClick,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={`bg-white dark:bg-black rounded h-full border border-border-light dark:border-border-dark hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black
            ${square ? "aspect-square" : "flex-1"}   
         `}
      >
         <div
            className={`w-full h-full flex items-center justify-center gap-1 ${
               vertical ? "flex-col" : ""
            }`}
         >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="text-sm capitalize">{text}</span>
         </div>
      </button>
   );
}
