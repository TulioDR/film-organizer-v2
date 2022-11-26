import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import posterNotFound from "../data/images/not-found/poster-not-found.jpg";
import backPosterNotFound from "../data/images/not-found/back-poster-not-found.jpg";

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
   genres?: boolean;
   backPoster?: boolean;
   trailer?: boolean;
};

export default function Poster({
   alt,
   posterPath,
   size,
   backPoster,
   genres,
   trailer,
}: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);

   const getPoster = (): string | StaticImageData => {
      if (!posterPath) {
         if (backPoster) return backPosterNotFound;
         else return posterNotFound;
      }
      if (genres) return posterPath;
      if (trailer) return `http://i3.ytimg.com/vi/${posterPath}/hqdefault.jpg`;
      return `https://image.tmdb.org/t/p/w${width[size]}${posterPath}`;
   };

   const image = getPoster();
   return (
      <div
         className={`w-full overflow-hidden relative ${
            backPoster ? "aspect-video" : "aspect-[2/3] h-full"
         }`}
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
                  size={70}
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
