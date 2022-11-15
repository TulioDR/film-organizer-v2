import { Swiper } from "swiper/react";
import RevealHorizontal from "../../../animations/RevealHorizontal";
interface Props {
   children: React.ReactNode;
}
export default function OnAirContainer({ children }: Props) {
   return (
      <RevealHorizontal fromRight>
         <Swiper
            speed={700}
            slidesPerView={5}
            slidesPerGroup={5}
            // loop={true}
            // loopedSlides={20}
            spaceBetween={20}
            className="mySwiper min-h-max"
         >
            {children}
         </Swiper>
      </RevealHorizontal>
   );
}
