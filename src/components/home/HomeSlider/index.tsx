import { Swiper, SwiperSlide } from "swiper/react";
import HomeNavButtonsContainer from "./HomeNavButtonsContainer";
import HomeCard from "./HomeCard";
import { AnimatePresence, motion } from "framer-motion";
import { staggerContainer } from "@/animations/StaggerCards";

type Props = {
   displayedCards: any[];
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   currentShowcase: string;
};

export default function HomeSlider({
   displayedCards,
   activeIndex,
   setActiveIndex,
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
               spaceBetween={20}
               className="w-full !px-10 !overflow-visible select-none relative"
            >
               <HomeNavButtonsContainer
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
               />
               {displayedCards.map((media, index) => (
                  <SwiperSlide
                     key={media.id}
                     className="max-w-min flex items-end"
                  >
                     <HomeCard
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        movie={media}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </motion.div>
      </AnimatePresence>
   );
}
