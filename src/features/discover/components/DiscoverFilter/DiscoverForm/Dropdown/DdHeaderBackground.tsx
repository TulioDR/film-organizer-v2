import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function DdHeaderBackground({ src, alt }: Props) {
   return (
      <Image src={src} alt={alt} fill sizes="100%" className="object-cover" />
   );
}
