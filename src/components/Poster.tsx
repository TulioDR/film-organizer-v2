import Image from "next/image";
import { useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";

const width = {
   sm: 92,
   md: 342,
   lg: 780,
   xl: 1280,
};

type Props = {
   alt: string;
   posterPath: string;
   size: "sm" | "md" | "lg" | "xl";
   backPoster?: boolean;
   trailer?: boolean;
};

export default function Poster({
   alt,
   posterPath,
   size,
   backPoster,
   trailer,
}: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const url = trailer
      ? `http://i3.ytimg.com/vi/${posterPath}/hqdefault.jpg`
      : `https://image.tmdb.org/t/p/w${width[size]}${posterPath}`;
   return (
      <div
         className={`w-full rounded-lg overflow-hidden relative ${
            backPoster ? "aspect-video" : "aspect-[2/3]"
         }`}
      >
         <Image
            alt={alt}
            src={url}
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
