import React from "react";

type Props = {
   icon: string;
   text: string;
   square?: true;
   onClick: () => void;
};

export default function PreviewButton({ icon, square, text, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className={`bg-white dark:bg-black rounded flex items-center justify-center gap-1 border border-border-light dark:border-border-dark hover:border-black dark:hover:border-white
            ${square ? "h-full aspect-square flex-col" : "flex-1 w-full"}   
         `}
      >
         <span className="material-symbols-outlined">{icon}</span>
         <span className="text-sm capitalize">{text}</span>
      </button>
   );
}
