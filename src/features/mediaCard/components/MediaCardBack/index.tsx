import BackHeader from "./BackHeader";
import BackBody from "./BackBody";
import BackFooter from "./BackFooter";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";
import BackContainer from "./BackContainer";

type Props = {
   mediaType: "tv" | "movie";
   title: string;
   backdrop: string;
   releaseDate: Date;
   overview: string;
   mediaId: number;
   poster: string;
   closeCard: () => void;
   closeWithoutRemove: () => void;
   button: React.ReactNode;
};

export default function MediaCardBack({
   mediaType,
   title,
   backdrop,
   releaseDate,
   overview,
   mediaId,
   poster,
   closeCard,
   closeWithoutRemove,
   button,
}: Props) {
   const { startPosterAnimation } = useTransitionPosterContext();
   const onLearnMoreClick = () => {
      closeWithoutRemove();
      setTimeout(() => {
         startPosterAnimation(mediaType, mediaId, poster);
      }, 500);
   };
   return (
      <BackContainer>
         <BackHeader
            alt={title}
            backdrop={backdrop}
            date={releaseDate}
            button={button}
         />
         <BackBody title={title} overview={overview} />
         <BackFooter
            closeCard={closeCard}
            mediaType={mediaType}
            mediaId={mediaId}
            onLearnMoreClick={onLearnMoreClick}
         />
      </BackContainer>
   );
}
