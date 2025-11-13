import React from "react";

type Props = {
   name: string;
   message?: string;
   wide?: boolean;
   children: React.ReactNode;
};

export default function FilterCard({ name, message, children, wide }: Props) {
   return (
      <div
         className={`rounded-md bg-background-accent-light dark:bg-background-accent-dark p-4 flex flex-col gap-4 shadow-md border-border-width border-border-light dark:border-border-dark ${
            wide ? "col-span-2" : ""
         }`}
      >
         <div className="">
            <span className="text-lg font-semibold mr-2">{name}</span>
            <span className="text-sm font-light">
               {message && `(${message})`}
            </span>
         </div>
         <div className="flex-1 flex items-center justify-center w-full text-black/70 dark:text-white/70">
            {children}
         </div>
      </div>
   );
}
