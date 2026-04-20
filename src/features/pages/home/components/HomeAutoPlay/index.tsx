import useHomeContext from "../../context/HomeContext";
import AutoPlayAnimation from "./AutoPlayAnimation";
import { AnimatePresence } from "framer-motion";

type Props = {};

export default function HomeAutoPlay({}: Props) {
   const { isAutoPlay, stopAutoPlay, startAutoPlay } = useHomeContext();

   const handleClick = () => {
      if (isAutoPlay) stopAutoPlay();
      else startAutoPlay();
   };

   return (
      <div className="w-full h-16 ">
         <button
            onClick={handleClick}
            className="h-full flex items-center gap-4 hover:opacity-80 active:opacity-80 duration-100 pr-4"
         >
            <div className="h-full aspect-square rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center relative">
               <span
                  style={{
                     fontVariationSettings: `'FILL' 1`,
                  }}
                  className="material-symbols-outlined !text-4xl"
               >
                  {isAutoPlay ? "pause" : "play_arrow"}
               </span>
               <AnimatePresence>
                  {isAutoPlay && <AutoPlayAnimation />}
               </AnimatePresence>
            </div>
            <span className="text-xl font-semibold">
               {isAutoPlay ? "Playing" : "Auto"}
            </span>
         </button>
      </div>
   );
}
