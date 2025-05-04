import { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import Backdrop from "./Backdrop";

export default function Background() {
   const { backgroundImage, backgroundKey } = useSelector(
      (state: StoreModel) => state.background
   );

   const [src, setSrc] = useState<string | StaticImageData | null>(null);

   useEffect(() => {
      const type = typeof backgroundImage;
      const link = `https://image.tmdb.org/t/p/original${backgroundImage}`;

      if (!backgroundImage) setSrc(null);
      else if (type === "string") setSrc(link);
      else setSrc(backgroundImage);
   }, [backgroundImage]);

   return (
      <div className="fixed top-0 left-0 h-[100svh] -z-10 w-screen bg-black">
         <AnimatePresence>
            {src && (
               <motion.div
                  key={backgroundKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full h-full"
               >
                  <Backdrop src={src} backgroundKey={backgroundKey} />
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
