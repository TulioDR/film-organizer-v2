import Image from "next/image";
import { motion } from "framer-motion";
import { PositionModel } from "../models/TransitionPosterModels";
import { useRouter } from "next/router";

type Props = {
   sidebarWidth: number;
   position: PositionModel;
   onAnimationComplete: () => void;
   src: string;
};

export default function TransitionPosterImage({
   sidebarWidth,
   position,
   onAnimationComplete,
   src,
}: Props) {
   const router = useRouter();
   const isHome = router.asPath === "/";

   const initial = {
      left: position.left - sidebarWidth - 40,
      top: position.top,
      height: position.height,
      borderRadius: isHome ? 8 : 24,
   };
   const animation = {
      left: 0,
      top: 120,
      height: "calc(100% - 120px - 40px)",
      borderRadius: 24,
   };

   return (
      <motion.div
         initial={initial}
         animate={animation}
         exit={animation}
         transition={{ duration: 3, ease: [0.645, 0.045, 0.355, 1] }}
         className="relative h-full aspect-[2/3] overflow-hidden"
         onAnimationComplete={onAnimationComplete}
      >
         <Image alt="selected" src={src} fill sizes="100%" priority />
      </motion.div>
   );
}
