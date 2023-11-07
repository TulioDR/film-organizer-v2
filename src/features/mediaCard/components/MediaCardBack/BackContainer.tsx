import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function BackContainer({ children }: Props) {
   return (
      <div className="bg-secondary-light dark:bg-secondary-dark p-2 sm:p-3 flex absolute top-0 left-0 w-full h-full flex-col [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden rounded-lg sm:rounded-3xl">
         {children}
      </div>
   );
}
