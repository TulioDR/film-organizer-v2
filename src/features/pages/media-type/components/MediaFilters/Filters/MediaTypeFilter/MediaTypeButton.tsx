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
         className={`h-9 w-full flex items-center justify-center bg-primary-light dark:bg-primary-dark rounded border border-border-light dark:border-border-dark  ${
            isSelected
               ? "text-black dark:text-white outline outline-2 outline-accent"
               : "hover:text-black hover:dark:text-white hover:border-primary-dark dark:hover:border-primary-light"
         }`}
      >
         {text}
      </button>
   );
}
