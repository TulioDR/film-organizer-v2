import React from "react";

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function CardContainer({ children, className = "" }: Props) {
   return (
      <div className={`bg-white shadow-lg rounded-lg p-4 ${className}`}>
         {children}
      </div>
   );
}
