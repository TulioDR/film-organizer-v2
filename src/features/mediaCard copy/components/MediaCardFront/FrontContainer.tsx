import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function FrontContainer({ children }: Props) {
   return (
      <div className="cursor-pointer relative [backface-visibility:hidden] overflow-hidden rounded-lg sm:rounded-3xl">
         {children}
      </div>
   );
}
