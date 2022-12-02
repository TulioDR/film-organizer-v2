import { Swiper } from "swiper/react";
import { Navigation } from "swiper";

type Props = {
   children: React.ReactNode;
   prevId: string;
   nextId: string;
};

export default function PersonScroll({ children, prevId, nextId }: Props) {
   return (
      <Swiper
         slidesPerView={5}
         slidesPerGroup={5}
         spaceBetween={12}
         navigation={{ prevEl: `#${prevId}`, nextEl: `#${nextId}` }}
         modules={[Navigation]}
         className="mySwiper"
      >
         {children}
      </Swiper>
   );
}
