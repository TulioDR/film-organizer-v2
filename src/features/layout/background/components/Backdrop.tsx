import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import LoadingSpinner from "@/common/components/LoadingSpinner";

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
            quality={100}
            onLoadingComplete={onLoadingComplete}
            className={`object-cover`}
         />
         {!isLoaded && (
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
               <div className="w-1/5">
                  <LoadingSpinner />
               </div>
            </div>
         )}
      </>
   );
}
