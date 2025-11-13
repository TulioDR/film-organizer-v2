import Link from "next/link";
import React from "react";

type Props = {
   total: number;
   currentPage: number;
};

export default function Menu({ total, currentPage }: Props) {
   return (
      <div className="w-full h-full flex items-center justify-center">
         <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: total }).map((_, i) => (
               <Link
                  key={i}
                  href={`?page=${i + 1}`}
                  className={`w-12 aspect-square rounded-md shadow-md font-bold  flex items-center justify-center ${
                     currentPage === i + 1
                        ? "bg-black text-white"
                        : "bg-white text-black"
                  }`}
               >
                  {i + 1}
               </Link>
            ))}
         </div>
      </div>
   );
}
