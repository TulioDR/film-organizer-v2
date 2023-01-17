import { motion } from "framer-motion";
import { staggerItem } from "../../animations/StaggerCards";
import Poster from "../../components/Poster";
import { useRef, useState } from "react";
import CardBack from "../../components/MainCardParts/CardBack";
import BackButton from "../../components/MainCardParts/BackButton";
import LearnMore from "../../components/MainCardParts/LearnMore";
import Bookmark from "../../components/MainCardParts/Bookmark";
import BackInfo from "../../components/MainCardParts/BackInfo";
import useIsMediaSaved from "../../hooks/useIsMediaSaved";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
   setTransitionValues: (
      posterPath: string,
      link: string,
      element: HTMLDivElement,
      setIsSelected: React.Dispatch<React.SetStateAction<boolean>>
   ) => void;
};

export default function MainCard({
   media,
   mediaType,
   setTransitionValues,
}: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen(!isOpen);

   const [isLeaving, setIsLeaving] = useState<boolean>(false);

   const learnMore = () => {
      setIsLeaving(true);
      toggle();
   };

   const cardRef = useRef<HTMLDivElement>(null);
   const [isInvisible, setIsInvisible] = useState<boolean>(false);
   const onExitComplete = () => {
      if (!isLeaving) return;
      const link = `/${mediaType}/${media.id}`;
      const element = cardRef.current!;
      setTransitionValues(media.poster_path, link, element, setIsInvisible);
   };

   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);
   return (
      <motion.article
         ref={cardRef}
         variants={staggerItem}
         className={`relative rounded-xl overflow-hidden ${
            isInvisible ? "invisible" : "shadow-xl"
         }`}
      >
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
      </motion.article>
   );
}
