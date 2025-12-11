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
         type="button"
         className={`h-9 box-content w-full flex items-center justify-center bg-primary-light dark:bg-primary-dark outline rounded-sm ${
            isSelected
               ? "text-black dark:text-white outline-2 outline-accent"
               : "hover:text-black hover:dark:text-white outline-1 outline-border-light dark:outline-border-dark hover:outline-primary-dark dark:hover:outline-primary-light"
         }`}
      >
         {text}
      </button>
   );
}
