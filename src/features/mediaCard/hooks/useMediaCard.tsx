import useBackground from "@/features/layout/background/hooks/useBackground";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";
import { useState } from "react";

export default function useMediaCard(
   mediaType: "movie" | "tv",
   mediaId: number,
   poster: string
) {
   const { startPosterAnimation } = useTransitionPosterContext();
   const { changeBackground, removeBackground } = useBackground();
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const openCard = () => {
      setIsOpen(true);
      changeBackground(mediaId, poster);
   };
   const closeCard = () => {
      setIsOpen(false);
      removeBackground();
   };

   const closeWithoutRemove = () => {
      setIsOpen(false);
   };

   const onLearnMoreClick = () => {
      closeWithoutRemove();
      setTimeout(() => {
         startPosterAnimation(mediaType, mediaId, poster);
      }, 500);
   };

   return { isOpen, openCard, closeCard, onLearnMoreClick };
}
