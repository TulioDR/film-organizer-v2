import RevealHorizontal from "../../../animations/RevealHorizontal";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";

interface Props {
   children: React.ReactNode;
}

export default function NowPlayingContainer({ children }: Props) {
   return (
      <RevealHorizontal fromRight>
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
      </RevealHorizontal>
   );
}
