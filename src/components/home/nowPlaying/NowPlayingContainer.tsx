import { Swiper } from "swiper/react";
import RevealHorizontal from "../../../animations/RevealHorizontal";
interface Props {
   children: React.ReactNode;
}

export default function NowPlayingContainer({ children }: Props) {
   return (
      <RevealHorizontal fromRight>
         <Swiper
            speed={700}
            slidesPerView={1.5}
            spaceBetween={20}
            className="mySwiper"
         >
            {children}
         </Swiper>
      </RevealHorizontal>
   );
}
