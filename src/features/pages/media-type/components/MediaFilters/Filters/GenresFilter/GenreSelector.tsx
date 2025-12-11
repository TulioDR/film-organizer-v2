import React from "react";

type Props = {
   name: string;
};

export default function GenreSelector({ name }: Props) {
   const [isSelected, setIsSelected] = React.useState(false);
   const toggle = () => setIsSelected((prev) => !prev);

   return (
      <div
         onClick={toggle}
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
   // return (
   //    <div
   //       onClick={toggle}
   //       className="p-2 rounded-full hover:bg-white dark:hover:bg-black"
   //    >
   //       <div
   //          className={`flex items-center justify-center border-2 border-black/70 dark:border-white/70 hover:border-black hover:dark:border-white rounded-full h-8
   //             ${
   //                isSelected
   //                   ? "bg-black text-white dark:bg-white dark:text-black"
   //                   : ""
   //             }
   //          `}
   //       >
   //          <span className="text-sm">{name}</span>
   //       </div>
   //    </div>
   // );
}
