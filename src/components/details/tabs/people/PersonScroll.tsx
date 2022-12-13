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
         slidesPerView={3}
         slidesPerGroup={3}
         spaceBetween={6}
         breakpoints={{
            640: {
               slidesPerView: 4,
               slidesPerGroup: 4,
            },
            768: {
               spaceBetween: 12,
               slidesPerView: 5,
               slidesPerGroup: 5,
            },
         }}
         navigation={{ prevEl: `#${prevId}`, nextEl: `#${nextId}` }}
         modules={[Navigation]}
         className="mySwiper"
      >
         {children}
      </Swiper>
   );
}
