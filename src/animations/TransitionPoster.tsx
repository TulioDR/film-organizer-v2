import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {
   selectedImg: string | null;
};

export default function TransitionPoster({ selectedImg }: Props) {
   return (
      <AnimatePresence>
         {selectedImg && (
            <motion.div
               layoutId={selectedImg}
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
