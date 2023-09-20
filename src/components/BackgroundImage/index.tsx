import { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import Backdrop from "./Backdrop";

export default function BackgroundImage() {
   const { backgroundImage, backgroundKey } = useSelector(
      (state: StoreModel) => state.background
   );

   const [src, setSrc] = useState<string | StaticImageData | null>(null);

   useEffect(() => {
      if (typeof backgroundImage === "string") {
         setSrc(`https://image.tmdb.org/t/p/w${1280}${backgroundImage}`);
      } else {
         setSrc(backgroundImage);
      }
   }, [backgroundImage]);

   return (
      <div
         // style={{
         //    background: `linear-gradient(to bottom right, #141214 60%, ${themeColor} 100%)`,
         // }}

         className="fixed top-0 left-0 h-screen bg-primary-dark -z-10 w-full flex items-center justify-center"
      >
         {!src ? (
            <div className="w-full h-full bg-primary-light dark:bg-primary-dark"></div>
         ) : (
            <motion.div
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
               className="w-full h-full"
            >
               <AnimatePresence mode="wait">
                  <motion.div
                     key={backgroundKey}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className="relative w-full h-full"
                  >
                     <Backdrop src={src} backgroundKey={backgroundKey} />
                     <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/80"></div>
                  </motion.div>
               </AnimatePresence>
            </motion.div>
         )}
      </div>
   );
}
