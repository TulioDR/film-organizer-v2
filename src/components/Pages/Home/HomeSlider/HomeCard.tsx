import { useSwiper } from "swiper/react";
import Poster from "@/components/Poster";
import { motion } from "framer-motion";
import { staggerItem } from "@/animations/StaggerCards";

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
         variants={staggerItem}
         onClick={handleClick}
         className="aspect-[2/3] w-24 lg:w-28 xl:w-32 2xl:w-52 cursor-pointer"
      >
         <div
            id={`${mediaType}-${media.id}`}
            className={`w-full h-full overflow-hidden rounded-lg duration-300 ${
               isActive ? "-translate-y-5" : ""
            } `}
         >
            <Poster
               alt={media.title || media.name}
               posterPath={media.poster_path}
               size="lg"
            />
         </div>
      </motion.div>
   );
}
