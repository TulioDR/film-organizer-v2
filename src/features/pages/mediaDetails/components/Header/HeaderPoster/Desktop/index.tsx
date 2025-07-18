import Image from "next/image";
import React from "react";

type Props = {
   alt: string;
   posterPath: string;
};

export default function Desktop({ alt, posterPath }: Props) {
   return (
      <div className="w-full lg:w-auto sm:px-20 md:px-0">
         <div className="aspect-[2/3] relative w-full md:w-1/2 mx-auto lg:w-auto lg:h-full">
            <Image
               alt={alt}
               src={`https://image.tmdb.org/t/p/w${780}${posterPath}`}
               placeholder="empty"
               fill
               sizes="100%"
               priority
            />
         </div>
      </div>
   );
}
