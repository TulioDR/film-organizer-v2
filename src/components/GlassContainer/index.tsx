import React from "react";

type Props = {
   children: React.ReactNode;
   className?: string;
};

export default function GlassContainer({ children, className = "" }: Props) {
   return (
      <div
         className={`backdrop-blur-md bg-black/20 rounded-md border border-border ${className}`}
      >
         {children}
      </div>
   );
}
