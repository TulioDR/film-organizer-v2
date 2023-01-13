import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { staggerItem } from "../../animations/StaggerCards";
import Poster from "../../components/Poster";
import { useState } from "react";
import CardBack from "../../components/MainCardParts/CardBack";
import BackButton from "../../components/MainCardParts/BackButton";
import LearnMore from "../../components/MainCardParts/LearnMore";
import Bookmark from "../../components/MainCardParts/Bookmark";
import BackInfo from "../../components/MainCardParts/BackInfo";
import useIsMediaSaved from "../../hooks/useIsMediaSaved";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function MainCard({ media, mediaType, setSelectedImg }: Props) {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen(!isOpen);

   const [isLeaving, setIsLeaving] = useState<boolean>(false);

   const onExitComplete = () => {
      if (!isLeaving) return;
      router.push(`/${mediaType}/${media.id}`);
      if (window.innerWidth >= 1280) {
         setSelectedImg(
            `https://image.tmdb.org/t/p/w${780}${media.poster_path}`
         );
      }
   };

   const learnMore = () => {
      setIsLeaving(true);
      toggle();
   };

   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);

   return (
      <motion.article
         variants={staggerItem}
         layoutId={`https://image.tmdb.org/t/p/w${780}${media.poster_path}`}
         className="rounded-xl overflow-hidden shadow-xl p-[2px] bg-gradient-to-t from-slate-900 to-slate-600"
      >
         <div className="w-full h-full relative">
            <div onClick={toggle} className="cursor-pointer">
               <Poster
                  alt={media.title || media.name}
                  posterPath={media.poster_path}
                  size="lg"
               />
            </div>
            <CardBack isOpen={isOpen} onExitComplete={onExitComplete}>
               <BackButton onClick={toggle} />
               <Poster
                  alt={media.title || media.name}
                  posterPath={media.backdrop_path}
                  size="lg"
                  backPoster
               />
               <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-t-xl w-full flex-1 flex flex-col -mt-5 z-10 p-4 overflow-hidden">
                  <BackInfo
                     title={media.title || media.name}
                     voteAverage={media.vote_average}
                     year={media.release_date || media.first_air_date}
                     overview={media.overview || "N/A"}
                  />
                  <div className="flex justify-between items-center h-9 w-full">
                     <LearnMore onClick={learnMore} />
                     <Bookmark
                        media={media}
                        mediaType={mediaType}
                        isMediaSaved={isMediaSaved}
                     />
                  </div>
               </div>
            </CardBack>
         </div>
      </motion.article>
   );
}
