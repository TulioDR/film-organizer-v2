import React from "react";

type Props = {
   name: string;
   message?: string;
   children: React.ReactNode;
   className?: string;
};

export default function FilterCard({
   name,
   message,
   children,
   className = "",
}: Props) {
   return (
      <div
         className={`rounded-md bg-background-light dark:bg-background-accent-dark p-4 flex flex-col gap-4 
            ${className}
         `}
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
