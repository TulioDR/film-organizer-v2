import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import posterNotFound from "../data/images/not-found/poster-not-found.jpg";
import backPosterNotFound from "../data/images/not-found/back-poster-not-found.jpg";
import personNotFound from "../data/images/not-found/person-not-found.jpg";

const width = {
   sm: 92,
   md: 342,
   lg: 780,
   xl: 1280,
};

type Props = {
   alt: string;
   posterPath: string | StaticImageData;
   size: "sm" | "md" | "lg" | "xl";
   backPoster?: boolean;
   trailer?: boolean;
   person?: boolean;
};

export default function Poster({
   alt,
   posterPath,
   size,
   backPoster,
   trailer,
   person,
}: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);

   const getPoster = (): string | StaticImageData => {
      if (!posterPath) {
         if (backPoster) return backPosterNotFound;
         if (person) return personNotFound;
         return posterNotFound;
      }
      if (trailer) return `http://i3.ytimg.com/vi/${posterPath}/hqdefault.jpg`;
      return `https://image.tmdb.org/t/p/w${width[size]}${posterPath}`;
   };

   const image = getPoster();
   return (
      <div
         className={`overflow-hidden  relative ${
            size === "sm" ? "rounded-lg" : "rounded-xl"
         } ${backPoster ? "aspect-video w-full" : "aspect-[2/3] h-full"}`}
      >
         <Image
            alt={alt}
            src={image}
            fill
            sizes="100%"
            priority
            onLoadingComplete={() => setIsLoaded(true)}
            className="object-cover"
         />
         {!isLoaded && (
            <div className="absolute w-full h-full top-0 left-0 bg-gray-600 grid place-content-center">
               <SpinnerCircularFixed
                  size={size === "sm" ? 20 : 70}
                  thickness={180}
                  speed={100}
                  color="white"
                  secondaryColor="rgb(31 41 55)"
               />
            </div>
         )}
      </div>
   );
}
