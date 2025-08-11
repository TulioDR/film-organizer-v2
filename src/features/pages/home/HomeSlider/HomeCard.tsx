import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";

type Props = {
   media: any;
   index: number;
   activeIndex: number;
   setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   currentShowcase: "movies" | "series" | "upcoming";
};

export default function HomeCard({
   media,
   index,
   activeIndex,
   setActiveIndex,
   currentShowcase,
}: Props) {
   const swiper = useSwiper();
   const handleClick = () => {
      setActiveIndex(index);
      swiper.slideTo(index);
   };
   const isActive = activeIndex === index;
   const isMovie = currentShowcase !== "series";
   const mediaType = isMovie ? "movie" : "tv";

   return (
      <motion.div
         onClick={handleClick}
         className="aspect-[2/3] w-20 lg:w-24 xl:w-28 2xl:w-32 cursor-pointer"
      >
         <div
            id={`${mediaType}-${media.id}`}
            className={`w-full h-full overflow-hidden rounded-lg duration-300 ${
               isActive ? "-translate-y-5" : "hover:-translate-y-5"
            } `}
         ></div>
      </motion.div>
   );
}
