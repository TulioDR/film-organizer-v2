import React from "react";

type Props = {
   onClick: () => void;
   isOpen: boolean;
};

export default function OpenButton({ onClick, isOpen }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-16 aspect-square bg-primary-light dark:bg-primary-dark text-black z-20 border border-border-light dark:border-border-dark dark:text-white absolute top-0 left-0 dark:hover:border-primary-light hover:border-primary-dark
            ${isOpen ? "rounded-tl-lg" : "rounded-lg"}   
         `}
      >
         <div className="h-full w-full flex items-center justify-center">
            <span className="material-symbols-outlined">close</span>
         </div>
      </button>
   );
}
