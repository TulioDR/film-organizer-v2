import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import Image from "next/image";
import React from "react";

type Props = {
   alt: string;
   posterPath: string;
   backPath: string;
};

export default function Mobile({ alt, posterPath, backPath }: Props) {
   return (
      <div
         style={{ borderRadius: STANDARD_RADIUS }}
         className="w-full relative aspect-video border border-border-light dark:border-border-dark overflow-hidden shadow-lg"
      >
         <Image
            alt={alt}
            src={`https://image.tmdb.org/t/p/w${780}${backPath}`}
            placeholder="empty"
            fill
            sizes="100%"
            quality={100}
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent p-2">
            <div className="aspect-[2/3] relative h-full mx-auto">
               <Image
                  alt={alt}
                  src={`https://image.tmdb.org/t/p/w${780}${posterPath}`}
                  placeholder="empty"
                  fill
                  sizes="100%"
                  quality={100}
                  priority
               />
            </div>
         </div>
      </div>
   );
}
