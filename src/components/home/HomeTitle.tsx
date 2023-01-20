import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { homeTitle } from "../../animations/homeAnimations";

type Props = { children: React.ReactNode; upcoming?: boolean };

export default function HomeTitle({ children, upcoming }: Props) {
   const titleRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(titleRef, {
      once: true,
   });
   const controls = useAnimation();
   useEffect(() => {
      if (isInView) controls.start("animate");
   }, [controls, isInView]);
   return (
      <div className="overflow-hidden">
         {upcoming ? (
            <motion.div
               variants={homeTitle}
               initial="initial"
               animate={controls}
               exit="exit"
               ref={titleRef}
               className="text-xl md:text-3xl 2xl:text-4xl font-bold mb-2"
            >
               {children}
            </motion.div>
         ) : (
            <motion.div
               variants={homeTitle}
               className="text-xl md:text-3xl 2xl:text-4xl font-bold mb-2"
            >
               {children}
            </motion.div>
         )}
      </div>
   );
}
