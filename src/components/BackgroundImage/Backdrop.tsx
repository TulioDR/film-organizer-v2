import { useState } from "react";
import StoreModel from "@/models/StoreModel";
import Image, { StaticImageData } from "next/image";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";
import { AnimatePresence } from "framer-motion";

type Props = {
   backgroundKey: string;
   src: string | StaticImageData;
};

export default function Backdrop({ backgroundKey, src }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
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
            className={`object-cover duration-300 brightness-50 ${
               isLoaded ? "opacity-100" : "opacity-0"
            }`}
         />
         <AnimatePresence>
            {!isLoaded && (
               <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
                  <SpinnerCircularFixed
                     size={"20%"}
                     thickness={100}
                     speed={100}
                     color={themeColor}
                     secondaryColor="transparent"
                  />
               </div>
            )}
         </AnimatePresence>
      </>
   );
}
