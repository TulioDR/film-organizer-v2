import React from "react";

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function PaginationWrapper({ children, className = "" }: Props) {
   return (
      <div
         className={`bg-primary-light h-full dark:bg-primary-dark rounded-lg border shadow-lg border-border-light dark:border-border-dark pointer-events-auto overflow-hidden ${className}`}
      >
         {children}
      </div>
   );
}
