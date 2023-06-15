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
      <div className="fixed top-0 left-0 h-screen brightness-50 bg-primary -z-10 w-full text-white flex items-center justify-center">
         {!src ? (
            <div className="w-full h-full bg-slate-700"></div>
         ) : (
            <AnimatePresence mode="wait">
               <motion.div
                  key={backgroundKey}
                  initial={{ filter: "brightness(0)" }}
                  animate={{ filter: "brightness(1)" }}
                  exit={{ filter: "brightness(0)" }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
               >
                  <Backdrop src={src} backgroundKey={backgroundKey} />
               </motion.div>
            </AnimatePresence>
         )}
      </div>
   );
}
