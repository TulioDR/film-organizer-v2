import { staggerContainer } from "@/animations/StaggerCards";
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
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
         >
            <Swiper
               slidesPerView={"auto"}
               spaceBetween={16}
               className="w-full !overflow-visible select-none !px-5 sm:!px-10"
            >
               {children}
            </Swiper>
         </motion.div>
      </AnimatePresence>
   );
}
