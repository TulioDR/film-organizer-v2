import { useSwiper } from "swiper/react";
import HomeNavButton from "./HomeNavButton";

type Props = {
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function HomeNavButtonsContainer({
   setActiveIndex,
   activeIndex,
}: Props) {
   const swiper = useSwiper();

   const next = () => {
      setActiveIndex((prev) => prev + 1);
      swiper.slideTo(activeIndex + 1);
   };
   const back = () => {
      setActiveIndex((prev) => prev - 1);
      swiper.slideTo(activeIndex - 1);
   };

   return (
      <div className="absolute bottom-full right-0 pb-10 flex gap-5">
         <HomeNavButton onClick={back} disabled={activeIndex <= 0} back />
         <HomeNavButton onClick={next} disabled={activeIndex >= 19} />
      </div>
   );
}
