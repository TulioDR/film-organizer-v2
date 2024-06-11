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
      const link = `https://image.tmdb.org/t/p/w1280${backgroundImage}`;

      if (!backgroundImage) setSrc(null);
      else if (type === "string") setSrc(link);
      else setSrc(backgroundImage);
   }, [backgroundImage]);

   return (
      <div className="fixed top-0 left-0 h-screen -z-10 w-screen bg-primary-light dark:bg-primary-dark">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full h-full ${
               src ? "bg-primary-dark" : "bg-primary-light dark:bg-primary-dark"
            }`}
         >
            <AnimatePresence mode="wait">
               {src && (
                  <motion.div
                     key={backgroundKey}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.4 }}
                     className="relative w-full h-full brightness-75"
                  >
                     <Backdrop src={src} backgroundKey={backgroundKey} />
                     <div className="absolute bottom-0 left-0 h-[50vh] w-full bg-gradient-to-t from-black/50 to-transparent z-10" />
                  </motion.div>
               )}
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
