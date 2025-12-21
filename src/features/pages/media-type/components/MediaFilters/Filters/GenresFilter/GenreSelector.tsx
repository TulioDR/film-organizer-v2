import React from "react";

type Props = {
   name: string;
   onClick: () => void;
   isSelected: boolean;
};

export default function GenreSelector({ name, onClick, isSelected }: Props) {
   return (
      <div
         onClick={onClick}
         className={`h-8 flex items-center gap-1.5 bg-primary-light dark:bg-primary-dark rounded-sm outline px-2 cursor-pointer ${
            isSelected
               ? "text-black dark:text-white outline-2 outline-accent"
               : "hover:text-black hover:dark:text-white outline-1 outline-border-light dark:outline-border-dark hover:outline-primary-dark dark:hover:outline-primary-light"
         }`}
      >
         <div
            className={`h-4 aspect-square rounded-sm border border-border-light dark:border-border-dark ${
               isSelected
                  ? "bg-accent"
                  : "bg-background-accent-light dark:bg-background-accent-dark"
            }`}
         />
         <span className="text-xs 2xl:text-sm truncate font-light">{name}</span>
      </div>
   );
}
