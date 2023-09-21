import { motion } from "framer-motion";
import { staggerItem } from "@/animations/StaggerCards";
import { SavedMediaModel } from "@/models/MediaModel";

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
   const { startPosterAnimation } = useTransitionPosterContext();
   const handleClick = () => startPosterAnimation(media.media_type, media);

   return (
      <motion.article
         layout
         variants={staggerItem}
         id={`${media.media_type}-${media.id}`}
         className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer"
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
