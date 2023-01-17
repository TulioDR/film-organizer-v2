import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {
   selectedImg: string | null;
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function TransitionPoster({
   selectedImg,
   setSelectedImg,
}: Props) {
   const onAnimationComplete = () => {
      console.log("finished");
   };
   return (
      <AnimatePresence>
         {selectedImg && (
            <motion.div
               onAnimationComplete={onAnimationComplete}
               initial={{ opacity: 1 }}
               animate={{ opacity: 1, transition: { duration: 1 } }}
               exit={{ opacity: 0, transition: { duration: 0 } }}
               layoutId={selectedImg}
               onClick={() => setSelectedImg(null)}
               className="fixed top-[76px] aspect-[2/3] rounded-xl overflow-hidden details-height"
            >
               <div className="relative w-full h-full">
                  <Image
                     alt="selected"
                     src={selectedImg}
                     fill
                     sizes="100%"
                     priority
                  />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
