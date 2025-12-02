import React from "react";

type Props = {
   text: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function MediaTypeButton({ text, isSelected, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="p-2 flex-1 hover:bg-primary-light dark:hover:bg-primary-dark rounded-sm"
      >
         <div
            className={`h-9 w-full flex items-center justify-center border rounded border-black dark:border-white ${
               isSelected
                  ? "bg-black text-white dark:text-black dark:bg-white"
                  : ""
            }`}
         >
            {text}
         </div>
      </button>
   );
}
