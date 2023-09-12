import { SwiperSlide } from "swiper/react";
import HomeNavButtonsContainer from "./HomeNavButtonsContainer";
import HomeCard from "./HomeCard";
import HomeSliderContainer from "./HomeSliderContainer";

type Props = {
   displayedCards: any[];
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   currentShowcase: "movies" | "series" | "upcoming";
};

export default function HomeSlider({
   displayedCards,
   activeIndex,
   setActiveIndex,
   currentShowcase,
}: Props) {
   return (
      <HomeSliderContainer currentShowcase={currentShowcase}>
         <HomeNavButtonsContainer
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
         />
         {displayedCards.map((media, index) => (
            <SwiperSlide key={media.id} className="max-w-min flex items-end">
               <HomeCard
                  currentShowcase={currentShowcase}
                  index={index}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  media={media}
               />
            </SwiperSlide>
         ))}
      </HomeSliderContainer>
   );
}
