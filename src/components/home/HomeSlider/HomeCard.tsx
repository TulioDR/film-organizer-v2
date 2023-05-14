import { useSwiper } from "swiper/react";
import Poster from "../../Poster";

type Props = {
   movie: any;
   index: number;
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function HomeCard({
   movie,
   index,
   activeIndex,
   setActiveIndex,
}: Props) {
   const swiper = useSwiper();
   const handleClick = () => {
      setActiveIndex(index);
      swiper.slideTo(index);
   };

   return (
      <div
         onClick={handleClick}
         className={`aspect-[2/3] bg-black w-24 lg:w-28 xl:w-32 2xl:w-52 cursor-pointer duration-300 origin-bottom-right ${
            activeIndex === index ? "-translate-y-5" : ""
         }`}
      >
         <Poster
            alt={movie.title || movie.name}
            posterPath={movie.poster_path}
            size="md"
         />
      </div>
   );
}
