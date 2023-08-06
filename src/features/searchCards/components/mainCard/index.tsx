import { motion } from "framer-motion";
import Poster from "../../../../components/Poster";
import { useState } from "react";
import CardBack from "./CardBack";
import BackButton from "./BackButton";
import LearnMore from "./LearnMore";
import MainCardBookmark from "./MainCardBookmark";
import BackInfo from "./BackInfo";
import useTransitionCard from "../../../transitionPoster/hooks/useTransitionCard";
import { useDispatch } from "react-redux";
import { backgroundActions } from "@/store/slices/background-slice";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";
import useBookmark from "@/hooks/useBookmark";
import { posterAnimationActions } from "@/store/slices/poster-animation-slice";
import { MediaModel } from "@/models/MediaModel";
// import { cards } from "@/animations/CardsAnimations";

type Props = {
   media: MediaModel;
   mediaType: "tv" | "movie";
   hidePage: () => void;
   setTransitionValues: (
      posterPath: string,
      link: string,
      element: HTMLDivElement
   ) => void;
};

export default function MainCard({
   media,
   mediaType,
   setTransitionValues,
   hidePage,
}: Props) {
   const { transitionCard, isInvisible, setIsInvisible } = useTransitionCard();

   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen((prev) => !prev);

   const [isLeaving, setIsLeaving] = useState<boolean>(false);
   const dispatch = useDispatch();

   const onLearnMoreClick = () => {
      setIsLeaving(true);
      setIsOpen(false);
      const background = {
         backgroundImage: media.backdrop_path,
         backgroundKey: media.backdrop_path,
      };
      dispatch(backgroundActions.setBackground(background));
      dispatch(posterAnimationActions.changePosterAnimation(false));
   };

   const onExitComplete = () => {
      if (!isLeaving) return;
      const link = `/${mediaType}/${media.id}`;
      const element = transitionCard.current!;
      setTransitionValues(media.poster_path, link, element);
      setIsInvisible(true);
      hidePage();
   };

   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);
   const { handleBookmarkClick } = useBookmark(media, mediaType);

   const cards = {
      initial: { opacity: 0, scale: 0.5 },
      animate: {
         opacity: 1,
         scale: 1,
         transition: { duration: 0.8 },
      },
      exit: {},
   };

   return (
      <motion.article
         layout
         ref={transitionCard}
         variants={cards}
         className={`relative rounded-xl overflow-hidden origin-bottom ${
            isInvisible ? "invisible" : ""
         }`}
      >
         <div
            onClick={toggle}
            className="cursor-pointer rounded-xl overflow-hidden"
         >
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
            <div className="bg-secondary rounded-t-xl w-full flex-1 flex flex-col -mt-5 z-10 p-4 overflow-hidden">
               <BackInfo
                  title={media.title || media.name}
                  voteAverage={media.vote_average}
                  year={media.release_date || media.first_air_date}
                  overview={media.overview || "N/A"}
               />
               <div className="flex justify-between items-center h-9 w-full">
                  <LearnMore onClick={onLearnMoreClick} />
                  <MainCardBookmark
                     onClick={handleBookmarkClick}
                     isMediaSaved={isMediaSaved}
                  />
               </div>
            </div>
         </CardBack>
      </motion.article>
   );
}
