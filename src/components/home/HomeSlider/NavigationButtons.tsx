import { useSwiper } from "swiper/react";
import NavigationButton from "./NavigationButton";

type Props = {
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function NavigationButtons({
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
      <div className="absolute bottom-full right-0 pr-10 pb-10 flex gap-5">
         <NavigationButton onClick={back} disabled={activeIndex <= 0} back />
         <NavigationButton onClick={next} disabled={activeIndex >= 19} />
      </div>
   );
}
