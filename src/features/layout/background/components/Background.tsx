import { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import useAppSelector from "@/store/hooks/useAppSelector";
import ReelsBackground from "./ReelsBackground";

export default function Background() {
   const { backgroundImage, backgroundKey } = useAppSelector(
      (state) => state.background
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
      <>
         <div className="fixed bottom-0 left-0 h-[100lvh] -z-10 w-full bg-[#DCD4CA] dark:bg-[#090B08]">
            <ReelsBackground />
            {/* <AnimatePresence>
               {src && (
                  <motion.div
                     key={src as string}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className="absolute top-0 left-0 w-full h-full brightness-75"
                  >
                     <Backdrop src={src} backgroundKey={backgroundKey} />
                  </motion.div>
               )}
            </AnimatePresence> */}
         </div>
      </>
   );
}
