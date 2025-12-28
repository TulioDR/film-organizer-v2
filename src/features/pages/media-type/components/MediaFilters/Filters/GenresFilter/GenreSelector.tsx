import React from "react";

type Props = {
   name: string;
   onClick: () => void;
   isSelected: boolean;
};

export default function GenreSelector({ name, onClick, isSelected }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-9 flex items-center gap-1.5 bg-primary-light dark:bg-primary-dark rounded border p-2 border-border-light dark:border-border-dark hover:border-primary-dark dark:hover:border-primary-light ${
            isSelected
               ? "text-black dark:text-white outline outline-2 outline-accent"
               : "hover:text-black hover:dark:text-white "
         }`}
      >
         <div
            className={`h-full aspect-square rounded-sm border border-border-light dark:border-border-dark ${
               isSelected
                  ? "bg-accent"
                  : "bg-background-accent-light dark:bg-background-accent-dark"
            }`}
         />
         <span className="text-xs 2xl:text-sm truncate font-light">{name}</span>
      </button>
   );
}
