import { homeSlider } from "@/animations/homeAnimations";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper } from "swiper/react";

interface Props {
   children: React.ReactNode;
   currentShowcase: string;
}

export default function HomeSliderContainer({
   children,
   currentShowcase,
}: Props) {
   return (
      <AnimatePresence mode="wait">
         <motion.div
            key={currentShowcase}
            variants={homeSlider}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
         >
            <Swiper
               slidesPerView={"auto"}
               spaceBetween={12}
               className="w-full !px-10 !overflow-visible select-none"
            >
               {children}
            </Swiper>
         </motion.div>
      </AnimatePresence>
   );
}
