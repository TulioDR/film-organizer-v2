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
         className={`h-8 flex items-center gap-1.5 hover:bg-primary-light dark:hover:bg-primary-dark rounded-sm px-2 cursor-pointer ${
            isSelected
               ? "text-black dark:text-white"
               : "hover:text-black hover:dark:text-white"
         }`}
      >
         <div
            className={`h-4 aspect-square rounded-sm border border-black dark:border-white ${
               isSelected ? "bg-black dark:bg-white" : ""
            }`}
         />
         <span className="text-sm">{name}</span>
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
