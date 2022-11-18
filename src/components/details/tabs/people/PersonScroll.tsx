import { Swiper } from "swiper/react";

type Props = {
   children: React.ReactNode;
};

export default function PersonScroll({ children }: Props) {
   return (
      <Swiper
         slidesPerView={5}
         slidesPerGroup={5}
         spaceBetween={12}
         className="mySwiper"
      >
         {children}
      </Swiper>
   );
}
