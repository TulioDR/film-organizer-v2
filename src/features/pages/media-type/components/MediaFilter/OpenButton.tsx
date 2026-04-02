import React from "react";

type Props = {
   onClick: () => void;
   isOpen: boolean;
};

export default function OpenButton({ onClick, isOpen }: Props) {
   return (
      <button
         onClick={onClick}
         className={`pointer-events-auto h-full aspect-square z-20 border
            border-border-light hover:border-primary-dark active:border-primary-dark
            dark:border-border-dark dark:hover:border-primary-light dark:active:border-primary-light
            bg-primary-light dark:bg-primary-dark text-black dark:text-white
            ${isOpen ? "rounded-tl-lg" : "rounded-lg"}   
         `}
      >
         <div className="h-full w-full flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
         </div>
      </button>
   );
}
