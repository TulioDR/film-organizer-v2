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
               className="aspect-[2/3] fixed top-[76px]"
               style={{ height: "calc(100% - 96px)" }}
            >
               <div className="w-full h-full aspect-[2/3] relative rounded-xl overflow-hidden">
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
