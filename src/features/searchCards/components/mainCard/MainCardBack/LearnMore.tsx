import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";
import useBackground from "@/hooks/useBackground";
import { MediaModel } from "@/models/MediaModel";
import StoreModel from "@/models/StoreModel";
import { useSelector } from "react-redux";

type Props = {
   mediaType: "tv" | "movie";
   media: MediaModel;
   closeCard: () => void;
   leave: () => void;
};

export default function LearnMore({
   mediaType,
   media,
   closeCard,
   leave,
}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   const { startPosterAnimation } = useTransitionPosterContext();
   const { changeBackground } = useBackground();

   const handleClick = () => {
      closeCard();
      changeBackground(media);
      leave();
      setTimeout(() => {
         startPosterAnimation(mediaType, media);
      }, 500);
   };
   return (
      <button
         onClick={handleClick}
         className="rounded-xl h-10 text-sm flex-1 font-medium font-oswald uppercase text-white"
         style={{ backgroundColor: themeColor }}
      >
         Learn More
      </button>
   );
}
