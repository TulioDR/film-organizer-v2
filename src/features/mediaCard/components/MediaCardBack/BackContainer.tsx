import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function BackContainer({ children }: Props) {
   return (
      <div className="bg-black rounded-xl border-8 border-black absolute top-0 left-0 flex flex-col w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
         {children}
      </div>
   );
}
