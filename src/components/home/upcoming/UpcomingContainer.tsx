import { Swiper } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { Navigation } from "swiper";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { homeCardContainer } from "../../../animations/homeAnimations";

interface Props {
   children: React.ReactNode;
}

export default function UpcomingContainer({ children }: Props) {
   const containerRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(containerRef, {
      once: true,
   });
   const controls = useAnimation();
   useEffect(() => {
      if (isInView) controls.start("animate");
   }, [controls, isInView]);

   return (
      <motion.div
         variants={homeCardContainer}
         initial="initial"
         animate={controls}
         exit="exit"
         ref={containerRef}
      >
         <Swiper
            speed={700}
            slidesPerView={1.5}
            slidesPerGroup={1}
            spaceBetween={20}
            breakpoints={{
               768: {
                  slidesPerView: 2,
               },
               1536: {
                  slidesPerView: 2.5,
                  slidesPerGroup: 2,
               },
            }}
            navigation={{ prevEl: "#prev-upc", nextEl: "#next-upc" }}
            modules={[Navigation]}
            className="mySwiper"
         >
            {children}
         </Swiper>
      </motion.div>
   );
}
