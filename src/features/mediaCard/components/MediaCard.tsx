import BackContainer from "./MediaCardBack/BackContainer";
import BackHeader from "./MediaCardBack/BackHeader";
import BackBody from "./MediaCardBack/BackBody";
import BackFooter from "./MediaCardBack/BackFooter";
import FrontContainer from "./MediaCardFront/FrontContainer";
import Poster from "@/components/Poster";
import MediaCardContainer from "./MediaCardContainer";
import useMediaCard from "../hooks/useMediaCard";

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
   savedMedia?: true;
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
   savedMedia,
}: Props) {
   const { isOpen, openCard, closeCard, onLearnMoreClick } = useMediaCard(
      mediaType,
      mediaId,
      poster
   );

   return (
      <MediaCardContainer
         id={`${mediaType}-${mediaId}`}
         onFocus={openCard}
         onBlur={closeCard}
         isOpen={isOpen}
         savedMedia={savedMedia}
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
