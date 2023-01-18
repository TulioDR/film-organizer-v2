import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { PositionModel } from "../../../models/TransitionPosterModels";

type Props = {
   selectedImg: string | null;
   position: PositionModel;
   link: string;
};

// WARNING, PARENT ELEMENT MUST HAVE POSITION:RELATIVE
export default function TransitionPoster({
   link,
   selectedImg,
   position,
}: Props) {
   const { push } = useRouter();
   const { top, left, height } = position;
   return (
      <AnimatePresence>
         {selectedImg && (
            <>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-full bg-light-bg-primary dark:bg-dark-bg-primary"
               ></motion.div>
               <motion.div
                  onAnimationComplete={() => push(link)}
                  initial={{ top: top, x: left, height }}
                  animate={{ top: 76, x: 0, height: "calc(100vh - 96px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed rounded-xl aspect-[2/3] overflow-hidden"
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
            </>
         )}
      </AnimatePresence>
   );
}
