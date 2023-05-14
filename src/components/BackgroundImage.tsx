import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   currentImg: string;
};

export default function BackgroundImage({ currentImg }: Props) {
   return (
      <div className="fixed top-0 left-0 h-screen -z-10 w-full bg-black text-white flex items-center justify-center">
         {!currentImg ? (
            <div className="bg-black w-full h-full"></div>
         ) : (
            <AnimatePresence mode="wait">
               <motion.div
                  key={currentImg}
                  initial={{ filter: "brightness(0)" }}
                  animate={{ filter: "brightness(1)" }}
                  exit={{ filter: "brightness(0)" }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full bg-black"
               >
                  <Image
                     src={`https://image.tmdb.org/t/p/w${1280}${currentImg}`}
                     // src={`https://image.tmdb.org/t/p/w${1280}${"/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg"}`}
                     alt="image"
                     fill
                     sizes="100%"
                     priority
                     className="object-cover"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-black/60 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-4/5 h-full bg-gradient-to-r from-black/60 to-transparent"></div>
               </motion.div>
            </AnimatePresence>
         )}
      </div>
   );
}
