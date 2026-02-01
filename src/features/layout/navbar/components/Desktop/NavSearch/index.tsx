import React from "react";

type Props = {};

export default function NavSearch({}: Props) {
   return (
      <div className="h-full aspect-square flex items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
         <span className="material-symbols-outlined">search</span>
      </div>
   );
}
