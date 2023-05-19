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
         spaceBetween={20}
         breakpoints={{
            640: {
               slidesPerView: 4,
               slidesPerGroup: 4,
            },
            768: {
               slidesPerView: 4,
               slidesPerGroup: 4,
            },
            1280: {
               slidesPerView: 5,
               slidesPerGroup: 5,
            },
            1536: {
               slidesPerView: 7,
               slidesPerGroup: 7,
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
