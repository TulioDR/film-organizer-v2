import React from "react";

type Props = {
   icon: string;
   text: string;
   square?: true;
};

export default function PreviewButton({ icon, square, text }: Props) {
   return (
      <button
         onClick={() => {}}
         className={`bg-white dark:bg-black rounded flex items-center justify-center gap-1 border border-border-light dark:border-border-dark hover:border-black dark:hover:border-white
            ${square ? "h-full aspect-square flex-col" : "flex-1 w-full"}   
         `}
      >
         <span className="material-symbols-outlined">{icon}</span>
         <span className="text-sm capitalize">{text}</span>
      </button>
   );
}
