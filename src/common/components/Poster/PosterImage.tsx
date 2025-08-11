import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   alt: string;
   image: string | StaticImageData;
   onLoadingComplete: () => void;
};

export default function PosterImage({ alt, image, onLoadingComplete }: Props) {
   return (
      <Image
         alt={alt}
         src={image}
         fill
         sizes="100%"
         priority
         onLoadingComplete={onLoadingComplete}
         className="object-cover"
      />
   );
}
