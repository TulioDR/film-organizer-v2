import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function ReelHole({ children }: Props) {
   return (
      <div className="h-full aspect-square rounded-full bg-[#40382E] relative overflow-hidden">
         {children}
      </div>
   );
}
