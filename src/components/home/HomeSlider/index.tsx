import { Swiper, SwiperSlide } from "swiper/react";
import NavigationButtons from "./NavigationButtons";
import HomeCard from "./HomeCard";

type Props = {
   displayedCards: any[];
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function HomeSlider({
   displayedCards,
   activeIndex,
   setActiveIndex,
}: Props) {
   return (
      <div className="w-full">
         <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="w-full !px-10 !overflow-visible select-none relative"
         >
            <NavigationButtons
               activeIndex={activeIndex}
               setActiveIndex={setActiveIndex}
            />
            {displayedCards.map((media, index) => (
               <SwiperSlide key={media.id} className="max-w-min flex items-end">
                  <HomeCard
                     index={index}
                     activeIndex={activeIndex}
                     setActiveIndex={setActiveIndex}
                     movie={media}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}
