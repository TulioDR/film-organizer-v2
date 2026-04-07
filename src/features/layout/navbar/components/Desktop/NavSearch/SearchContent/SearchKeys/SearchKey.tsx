import React from "react";

type Props = {
   className?: string;
   icon?: string | React.ReactNode;
   text?: string;
};

export default function SearchKey({ className = "", icon, text }: Props) {
   return (
      <div
         className={`
            h-6 flex items-center justify-center overflow-hidden rounded-sm 
            bg-background-light dark:bg-background-accent-dark
            border border-border-light dark:border-border-dark
            ${className}
         `}
      >
         {text ? (
            <span className="text-xs tracking-widest font-medium">{text}</span>
         ) : (
            <span className="material-symbols-outlined !text-xl">{icon}</span>
         )}
      </div>
   );
}
