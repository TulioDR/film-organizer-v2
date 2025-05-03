import BackContainer from "./MediaCardBack/BackContainer";
import BackHeader from "./MediaCardBack/BackHeader";
import BackBody from "./MediaCardBack/BackBody";
import BackFooter from "./MediaCardBack/BackFooter";
import FrontContainer from "./MediaCardFront/FrontContainer";
import Poster from "@/components/Poster";
import MediaCardContainer from "./MediaCardContainer";
import { useEffect, useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import useBackground from "@/features/layout/background/hooks/useBackground";

type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
   cardFront: React.ReactNode;
   setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
   setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
   selectedId: number | null;
   hoveredId: number | null;
};

export default function MediaCard({
   mediaType,
   media,
   cardFront,
   setHoveredId,
   selectedId,
   setSelectedId,
   hoveredId,
}: Props) {
   const mediaId = media.id;
   const title = media.name || media.title;

   // const { isOpen, openCard, closeCard, onLearnMoreClick } = useMediaCard(
   //    mediaType,
   //    mediaId,
   //    media.poster_path
   // );

   const [isSelected, setIsSelected] = useState<boolean>(false);
   useEffect(() => {
      if (selectedId === mediaId) setIsSelected(true);
      else setIsSelected(false);
   }, [mediaId, selectedId]);

   const [hideCard, setHideCard] = useState<boolean>(false);
   useEffect(() => {
      const hide = hoveredId === selectedId && selectedId && !isSelected;
      setHideCard(!!hide);
   }, [selectedId, isSelected, hoveredId]);

   const { changeBackground, removeBackground } = useBackground();

   const onHoverStart = () => {
      setHoveredId(mediaId);
   };
   const onHoverEnd = () => {
      setHoveredId(null);
   };
   const openCard = () => {
      setSelectedId(mediaId);
      changeBackground(mediaId, media.backdrop_path || media.poster_path);
   };
   const closeCard = () => {
      setSelectedId(null);
      removeBackground();
   };

   const closeWithoutRemoveBackground = () => {
      setSelectedId(null);
   };

   return (
      <MediaCardContainer
         id={`${mediaType}-${mediaId}`}
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         onBlur={closeCard}
         isOpen={isSelected}
         hideCard={hideCard}
      >
         <FrontContainer onClick={openCard}>
            <Poster alt={title} posterPath={media.poster_path} size="lg" />
            {cardFront}
         </FrontContainer>
         <BackContainer>
            <BackHeader
               alt={title}
               backdrop={media.backdrop_path}
               closeCard={closeCard}
            />
            <div className="w-full flex flex-col gap-2 flex-1 p-4 pt-6 overflow-hidden">
               <BackBody
                  title={title}
                  overview={media.overview || "N/A"}
                  releaseDate={media.release_date || media.first_air_date}
               />
               <BackFooter
                  mediaType={mediaType}
                  mediaId={mediaId}
                  media={media}
                  onLearnMoreClick={() => {}}
               />
            </div>
         </BackContainer>
      </MediaCardContainer>
   );
}
