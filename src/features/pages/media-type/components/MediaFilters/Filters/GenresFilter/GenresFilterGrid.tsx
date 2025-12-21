import React from "react";

type Props = {
   children: React.ReactNode;
   small?: true;
};

export default function GenresFilterGrid({ children, small }: Props) {
   return (
      <div
         className={`grid w-full gap-2 ${
            small
               ? "grid-cols-2"
               : "grid-cols-3 2xl:grid-cols-4 grid-rows-7 2xl:grid-rows-5"
         }`}
      >
         {children}
      </div>
   );
}
