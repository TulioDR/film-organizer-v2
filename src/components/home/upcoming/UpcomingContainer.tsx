import { Swiper } from "swiper/react";
import RevealHorizontal from "../../../animations/RevealHorizontal";
import { Navigation } from "swiper";

interface Props {
   children: React.ReactNode;
}

export default function UpcomingContainer({ children }: Props) {
   return (
      <RevealHorizontal fromRight>
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
      </RevealHorizontal>
   );
}
