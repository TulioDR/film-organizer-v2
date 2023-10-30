import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";

import { MediaModel } from "@/models/MediaModel";
import StoreModel from "@/models/StoreModel";
import Link from "next/link";
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

   const handleClick = () => {
      closeCard();
      leave();
      setTimeout(() => {
         startPosterAnimation(mediaType, media);
      }, 500);
   };
   return (
      <Link
         href={`/${mediaType}/${media.id}`}
         scroll={false}
         onClick={handleClick}
         onMouseDown={(e) => e.preventDefault()}
         className="rounded-xl h-10 text-sm flex-1 flex items-center justify-center font-medium font-oswald uppercase text-white"
         style={{ backgroundColor: themeColor }}
      >
         Learn More
      </Link>
   );
}
