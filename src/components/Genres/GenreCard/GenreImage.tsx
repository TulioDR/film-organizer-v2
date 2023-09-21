import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   alt: string;
   src: StaticImageData;
};

export default function GenreImage({ alt, src }: Props) {
   return (
      <Image
         alt={alt}
         src={src}
         fill
         sizes="100%"
         quality={100}
         priority
         className="object-cover"
      />
   );
}
