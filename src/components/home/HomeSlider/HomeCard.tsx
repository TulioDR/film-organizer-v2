import { useSwiper } from "swiper/react";
import Poster from "../../Poster";
import { motion } from "framer-motion";
import { homeCard } from "@/animations/homeAnimations";

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
   const isActive = activeIndex === index;

   return (
      <motion.div
         variants={homeCard}
         onClick={handleClick}
         className="aspect-[2/3] w-24 lg:w-28 xl:w-32 2xl:w-52 cursor-pointer origin-bottom-right"
      >
         <div
            className={`home-card w-full h-full overflow-hidden rounded-lg duration-300 ${
               isActive ? "-translate-y-5" : ""
            } `}
         >
            <Poster
               alt={movie.title || movie.name}
               posterPath={movie.poster_path}
               size="md"
            />
         </div>
      </motion.div>
   );
}
