import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function Container({ children }: Props) {
   return (
      <div className="bg-white p-2 absolute top-0 left-0 flex flex-col w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-xl">
         {children}
      </div>
   );
}
