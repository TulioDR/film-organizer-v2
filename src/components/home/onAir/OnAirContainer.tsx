import { Swiper } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation } from "swiper";
import { homeCardContainer } from "../../../animations/homeAnimations";
interface Props {
   children: React.ReactNode;
}
export default function OnAirContainer({ children }: Props) {
   return (
      <motion.div variants={homeCardContainer}>
         <Swiper
            speed={700}
            slidesPerView={2}
            slidesPerGroup={2}
            spaceBetween={20}
            breakpoints={{
               640: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
               },
               768: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
               },
               1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
               },
               1280: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
               },
            }}
            navigation={{ prevEl: "#prev-air", nextEl: "#next-air" }}
            modules={[Navigation]}
            className="mySwiper min-h-max"
         >
            {children}
         </Swiper>
      </motion.div>
   );
}
