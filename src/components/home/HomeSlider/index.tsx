import { SwiperSlide } from "swiper/react";
import HomeNavButtonsContainer from "./HomeNavButtonsContainer";
import HomeCard from "./HomeCard";
import HomeSliderContainer from "./HomeSliderContainer";

type Props = {
   displayedCards: any[];
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   currentShowcase: string;
   isPageHidden: boolean;
};

export default function HomeSlider({
   displayedCards,
   activeIndex,
   setActiveIndex,
   currentShowcase,
   isPageHidden,
}: Props) {
   return (
      <HomeSliderContainer currentShowcase={currentShowcase}>
         <HomeNavButtonsContainer
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
         />
         {displayedCards.map((media, index) => (
            <SwiperSlide
               key={media.id}
               className={`max-w-min flex items-end ${
                  isPageHidden && activeIndex === index
                     ? "opacity-0 duration-0"
                     : ""
               }`}
            >
               <HomeCard
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  movie={media}
               />
            </SwiperSlide>
         ))}
      </HomeSliderContainer>
   );
}
