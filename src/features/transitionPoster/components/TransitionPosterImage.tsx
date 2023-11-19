import Image from "next/image";
import { motion } from "framer-motion";
import { PositionModel } from "../models/TransitionPosterModels";
import { useRouter } from "next/router";
import useTransitionPosterContext from "../context/TransitionPosterContext";

type Props = {
   position: PositionModel;
   onAnimationComplete: () => void;
   src: string;
};

export default function TransitionPosterImage({
   position,
   onAnimationComplete,
   src,
}: Props) {
   const router = useRouter();
   const isHome = router.asPath === "/";

   const { navbarHeight, sidebarWidth, isMobile } =
      useTransitionPosterContext();

   const initialDesktop = {
      left: position.left - sidebarWidth - 40,
      top: position.top - navbarHeight,
      height: position.height,
      borderRadius: isHome ? 8 : 24,
   };
   const animateDesktop = {
      left: 0,
      top: 0,
      height: "100%",
      borderRadius: 24,
   };

   const initialMobile = {
      left: position.left - 20,
      top: position.top - navbarHeight,
      width: position.width,
      borderRadius: isHome ? 8 : 24,
   };
   const animateMobile = {
      left: 0,
      top: 0,
      width: "100%",
      borderRadius: 24,
   };

   return (
      <motion.div
         initial={isMobile ? initialMobile : initialDesktop}
         animate={isMobile ? animateMobile : animateDesktop}
         exit={isMobile ? animateMobile : animateDesktop}
         transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
         className="relative aspect-[2/3] overflow-hidden"
         onAnimationComplete={onAnimationComplete}
      >
         <Image alt="selected" src={src} fill sizes="100%" priority />
      </motion.div>
   );
}
