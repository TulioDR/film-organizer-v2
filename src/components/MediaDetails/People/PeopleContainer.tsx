import { Swiper } from "swiper/react";

type Props = {
   children: React.ReactNode;
};

export default function PeopleContainer({ children }: Props) {
   return (
      <Swiper
         slidesPerView={"auto"}
         spaceBetween={12}
         className="mySwiper relative w-full"
      >
         {children}
      </Swiper>
   );
}
