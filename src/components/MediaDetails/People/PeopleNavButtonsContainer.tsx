import React from "react";
import PeopleNavButton from "./PeopleNavButton";
import { useSwiper } from "swiper/react";

type Props = {
   activeIndex: number;
   length: number;
};
export default function PeopleNavButtons({ activeIndex, length }: Props) {
   const swiper = useSwiper();

   const next = () => {
      swiper.slideNext();
   };
   const back = () => {
      swiper.slidePrev();
   };
   return (
      <div className="absolute bottom-full right-0 pb-1 flex gap-5">
         <PeopleNavButton onClick={back} disabled={activeIndex <= 0} back />
         <PeopleNavButton onClick={next} disabled={activeIndex >= length - 1} />
      </div>
   );
}
