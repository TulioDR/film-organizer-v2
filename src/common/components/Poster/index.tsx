import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import posterNotFound from "@/data/images/not-found/poster-not-found.jpg";
import backPosterNotFound from "@/data/images/not-found/back-poster-not-found.jpg";
import personNotFound from "@/data/images/not-found/person-not-found.jpg";
import PosterImage from "./PosterImage";
import PosterSpinner from "./PosterSpinner";

const width = {
   sm: 92,
   md: 342,
   lg: 780,
   xl: 1280,
};

type Props = {
   alt: string;
   posterPath: string | StaticImageData;
   size?: "sm" | "md" | "lg" | "xl";
   front?: true;
   back?: true;
   trailer?: true;
   person?: true;
};

export default function Poster({
   alt,
   posterPath: src,
   size = "lg",
   front,
   back,
   trailer,
   person,
}: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const [image, setImage] = useState<string | StaticImageData | null>(null);

   const onLoadingComplete = () => setIsLoaded(true);

   useEffect(() => {
      const getPoster = (): string | StaticImageData => {
         if (!src) {
            if (back || trailer) return backPosterNotFound;
            if (person) return personNotFound;
            return posterNotFound;
         }

         if (typeof src === "string") {
            if (trailer) return `http://i3.ytimg.com/vi/${src}/hqdefault.jpg`;
            return `https://image.tmdb.org/t/p/w${width[size]}${src}`;
         }

         return src;
      };
      setImage(getPoster());
   }, [src, size, back, trailer, person]);

   return (
      <div
         className={`relative w-full 
            ${front ? "aspect-[2/3]" : ""}
            ${back ? "aspect-video" : ""} 
            ${!front && !back ? "h-full" : ""}
         `}
      >
         {image && (
            <PosterImage
               alt={alt}
               image={image}
               onLoadingComplete={onLoadingComplete}
            />
         )}
         {!isLoaded && <PosterSpinner front={front} back={back} />}
      </div>
   );
}
