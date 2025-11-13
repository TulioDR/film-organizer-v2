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
         className="p-3 flex-1 hover:bg-white dark:hover:bg-black rounded-full"
      >
         <div
            className={`h-16 w-full flex items-center justify-center rounded-full border-2 border-black dark:border-white ${
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
