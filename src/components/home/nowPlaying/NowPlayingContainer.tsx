import { motion } from "framer-motion";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import { homeCardContainer } from "../../../animations/homeAnimations";

interface Props {
   children: React.ReactNode;
}

export default function NowPlayingContainer({ children }: Props) {
   return (
      <motion.div variants={homeCardContainer}>
         <Swiper
            speed={700}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
               640: {
                  slidesPerView: 1.3,
               },
               768: {
                  slidesPerView: 1.5,
               },
            }}
            navigation={{ prevEl: "#prev-now", nextEl: "#next-now" }}
            modules={[Navigation]}
            className="mySwiper"
         >
            {children}
         </Swiper>
      </motion.div>
   );
}
