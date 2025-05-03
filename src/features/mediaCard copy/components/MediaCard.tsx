import BackContainer from "./MediaCardBack/BackContainer";
import BackHeader from "./MediaCardBack/BackHeader";
import BackBody from "./MediaCardBack/BackBody";
import BackFooter from "./MediaCardBack/BackFooter";
import FrontContainer from "./MediaCardFront/FrontContainer";
import Poster from "@/components/Poster";
import MediaCardContainer from "./MediaCardContainer";
import useMediaCard from "../hooks/useMediaCard";
import { useEffect, useState } from "react";
import { MediaModel } from "@/models/MediaModel";
import { JsxEmit } from "typescript";

type Props = {
   mediaType: "tv" | "movie";
   mediaId: number;
   title: string;
   backdrop: string;
   releaseDate: Date;
   overview: string;
   poster: string;
   backButton: React.ReactNode;
   cardFront: React.ReactNode;
   setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
   isSelected: boolean;
   isHovered: boolean;
   setHoveredId: React.Dispatch<React.SetStateAction<number | null>>;
   selectedId: number | null;
   hoveredId: number | null;
};

export default function MediaCard({
   mediaType,
   mediaId,
   title,
   poster,
   backdrop,
   releaseDate,
   backButton,
   overview,
   cardFront,
   isSelected,
   isHovered,
   setHoveredId,
   selectedId,
   setSelectedId,
   hoveredId,
}: Props) {
   const { isOpen, openCard, closeCard, onLearnMoreClick } = useMediaCard(
      mediaType,
      mediaId,
      poster
   );

   const [isCardTransparent, setIsCardTransparent] = useState<boolean>(false);

   useEffect(() => {
      if (isOpen) setSelectedId(mediaId);
      else setSelectedId(null);
   }, [isOpen]);

   useEffect(() => {
      const isTransparent =
         hoveredId === selectedId &&
         hoveredId &&
         selectedId &&
         !isSelected &&
         !isHovered
            ? true
            : false;
      console.log(isTransparent);
      setIsCardTransparent(isTransparent);
   }, [isHovered, selectedId, isSelected, hoveredId]);

   return (
      <MediaCardContainer
         id={`${mediaType}-${mediaId}`}
         onHoverStart={() => setHoveredId(mediaId)}
         onHoverEnd={() => setHoveredId(null)}
         onFocus={openCard}
         onBlur={closeCard}
         isOpen={isOpen}
         isCardTransparent={isCardTransparent}
      >
         <FrontContainer>
            <Poster alt={title} posterPath={poster} size="lg" />
            {cardFront}
         </FrontContainer>
         <BackContainer>
            <BackHeader
               alt={title}
               backdrop={backdrop}
               date={releaseDate}
               button={backButton}
            />
            <BackBody title={title} overview={overview} />
            <BackFooter
               closeCard={closeCard}
               mediaType={mediaType}
               mediaId={mediaId}
               onLearnMoreClick={onLearnMoreClick}
            />
         </BackContainer>
      </MediaCardContainer>
   );
}
