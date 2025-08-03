import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function GenresContainer({ children }: Props) {
   return (
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-12">
         {children}
      </div>
   );
}
