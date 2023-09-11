import { motion } from "framer-motion";
import { staggerItem } from "@/animations/StaggerCards";
import useTransitionCard from "@/features/transitionPoster/hooks/useTransitionCard";
import { SavedMediaModel } from "@/models/MediaModel";

import { useDispatch } from "react-redux";
import { posterAnimationActions } from "@/store/slices/poster-animation-slice";
import { useRouter } from "next/router";
import Poster from "@/components/Poster";
import DeleteSelector from "./DeleteSelector";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";

type Props = {
   media: SavedMediaModel;
   isSelected: boolean;
   isDeleteOpen: boolean;
   onTap: () => void;
};

export default function SavedMediaCard({
   media,
   isDeleteOpen,
   isSelected,
   onTap,
}: Props) {
   const { setTransitionValues } = useTransitionPosterContext();
   const dispatch = useDispatch();
   const { transitionCard, isInvisible, setIsInvisible } = useTransitionCard();

   const router = useRouter();
   const handleClick = () => {
      router.push(`/${media.media_type}/${media.media_id}`);
      dispatch(posterAnimationActions.changePosterAnimation(false));
      const element = transitionCard.current!;
      setTransitionValues(media.media_poster, element);
      setIsInvisible(true);
   };

   return (
      <motion.article
         layout
         variants={staggerItem}
         ref={transitionCard}
         className={`relative rounded-xl overflow-hidden ${
            isInvisible ? "invisible" : "shadow-xl cursor-pointer"
         }`}
         onClick={!isDeleteOpen ? handleClick : undefined}
      >
         <Poster
            alt={media.media_title}
            posterPath={media.media_poster}
            size="lg"
         />
         {isDeleteOpen && (
            <DeleteSelector isSelected={isSelected} onTap={onTap} />
         )}
         <div className="absolute w-full h-full">{media.media_title}</div>
      </motion.article>
   );
}
