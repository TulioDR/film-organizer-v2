import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence } from "framer-motion";
import LoadingSpinner from "../LoadingSpinner";

type Props = {
   backgroundKey: string;
   src: string | StaticImageData;
};

export default function Backdrop({ backgroundKey, src }: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const onLoadingComplete = () => setIsLoaded(true);
   return (
      <>
         <Image
            src={src}
            alt={backgroundKey}
            fill
            sizes="100%"
            onLoadingComplete={onLoadingComplete}
            className={`object-cover duration-300  ${
               isLoaded ? "opacity-100" : "opacity-0"
            }`}
         />
         <AnimatePresence>
            {!isLoaded && (
               <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <div className="w-1/5">
                     <LoadingSpinner />
                  </div>
               </div>
            )}
         </AnimatePresence>
      </>
   );
}
