import { useState } from "react";
import Image from "next/image";
import LoadingSpinner from "@/common/components/LoadingSpinner";
import { motion } from "framer-motion";

type Props = {
   path: string;
};

export default function Backdrop({ path }: Props) {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const onLoadingComplete = () => setIsLoaded(true);

   const src = `https://image.tmdb.org/t/p/original${path}`;

   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="absolute top-0 left-0 w-full h-full brightness-50 z-10"
      >
         <Image
            src={src}
            alt={path}
            fill
            sizes="100%"
            quality={100}
            onLoadingComplete={onLoadingComplete}
            className={`object-cover duration-200 ${isLoaded ? "" : "opacity-0"}`}
         />
         {!isLoaded && (
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
               <div className="w-1/5">
                  <LoadingSpinner />
               </div>
            </div>
         )}
      </motion.div>
   );
}
