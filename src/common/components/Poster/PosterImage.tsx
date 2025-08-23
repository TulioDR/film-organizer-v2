import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   alt: string;
   image: string | StaticImageData;
   onLoadingComplete: () => void;
   quality: number;
   isLoaded: boolean;
};

export default function PosterImage({
   alt,
   image,
   onLoadingComplete,
   quality,
   isLoaded,
}: Props) {
   return (
      <Image
         alt={alt}
         src={image}
         fill
         sizes="100%"
         priority
         quality={quality}
         onLoadingComplete={onLoadingComplete}
         className={`object-cover ${isLoaded ? "" : "opacity-0"}`}
      />
   );
}
