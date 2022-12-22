import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { staggerItem } from "../../animations/StaggerCards";
import Poster from "../../components/Poster";
import { useState } from "react";
import CardBack from "../../features/SearchCards/MainCardParts/CardBack";
import BackButton from "../../features/SearchCards/MainCardParts/BackButton";
import LearnMore from "../../features/SearchCards/MainCardParts/LearnMore";
import Bookmark from "../../features/SearchCards/MainCardParts/Bookmark";
import BackInfo from "../../features/SearchCards/MainCardParts/BackInfo";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function MainCard({ media, mediaType, setSelectedImg }: Props) {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const goTo = () => {
      router.push(`/${mediaType}/${media.id}`);
      if (window.innerWidth >= 1280) {
         setSelectedImg(
            `https://image.tmdb.org/t/p/w${780}${media.poster_path}`
         );
      }
   };

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <motion.article
         variants={staggerItem}
         layoutId={`https://image.tmdb.org/t/p/w${780}${media.poster_path}`}
         className="aspect-[2/3] relative rounded-xl overflow-hidden shadow-xl"
      >
         <div onClick={toggle} className="cursor-pointer">
            <Poster
               alt={media.title || media.name}
               posterPath={media.poster_path}
               size="lg"
            />
         </div>
         <CardBack isOpen={isOpen}>
            <BackButton onClick={toggle} />
            <Poster
               alt={media.title || media.name}
               posterPath={media.backdrop_path}
               size="lg"
               backPoster
            />
            <div className="bg-light-bg dark:bg-dark-bg rounded-t-xl w-full flex-1 flex flex-col -mt-5 z-10 p-4 overflow-hidden">
               <BackInfo
                  title={media.title || media.name}
                  voteAverage={media.vote_average}
                  year={media.release_date || media.first_air_date}
                  overview={media.overview || "N/A"}
               />
               <div className="flex justify-between items-center h-9 w-full">
                  <LearnMore />
                  <Bookmark />
               </div>
            </div>
         </CardBack>
      </motion.article>
   );
}
