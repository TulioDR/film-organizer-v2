import React from "react";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
   dangerZone?: true;
};

export default function AccountButton({
   onClick,
   children,
   dangerZone,
}: Props) {
   return (
      <button
         onClick={onClick}
         className={` rounded-xl py-3 px-4 font-medium  ${
            dangerZone
               ? "bg-secondary-light dark:bg-secondary-dark text-red-600 dark:text-red-400"
               : "bg-secondary-dark dark:bg-secondary-light text-dark-1 dark:text-light-1"
         }`}
      >
         {children}
      </button>
   );
}
