import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   alt: string;
   src: StaticImageData;
};

export default function GenreImage({ alt, src }: Props) {
   return (
      <div className="h-full relative">
         <Image
            alt={alt}
            src={src}
            fill
            sizes="100%"
            priority
            className="object-cover"
         />
      </div>
   );
}
