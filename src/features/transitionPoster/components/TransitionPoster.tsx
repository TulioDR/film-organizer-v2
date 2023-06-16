import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { PositionModel } from "../../../models/TransitionPosterModels";

type Props = {
   selectedImg: string | null;
   position: PositionModel;
   link: string;
};

export default function TransitionPoster({
   link,
   selectedImg,
   position,
}: Props) {
   const router = useRouter();
   const { top, left, height } = position;
   const onAnimationComplete = () => {
      // router.push(link);
   };
   return (
      <AnimatePresence>
         {selectedImg && (
            <motion.div
               onAnimationComplete={onAnimationComplete}
               initial={{ top: top, x: left, height }}
               animate={{ top: 96, x: 40, height: "calc(100vh - 136px)" }}
               transition={{ duration: 3, ease: [0.645, 0.045, 0.355, 1] }}
               className="fixed"
            >
               <div className="relative h-full aspect-[2/3] rounded-xl overflow-hidden">
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
