import { motion } from "framer-motion";
import { SavedMediaModel } from "@/models/MediaModel";

import Poster from "@/components/Poster";
import DeleteSelector from "./DeleteSelector";
import useTransitionPosterContext from "@/features/transitionPoster/context/TransitionPosterContext";

type Props = {
   media: SavedMediaModel;
   isSelected: boolean;
   isDeleteModeActive: boolean;
   onTap: () => void;
};

export default function SavedMediaCard({
   media,
   isDeleteModeActive,
   isSelected,
   onTap,
}: Props) {
   const { startPosterAnimation } = useTransitionPosterContext();
   const handleClick = () => startPosterAnimation(media.media_type, media);

   return (
      <motion.article
         layout
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
         id={`${media.media_type}-${media.id}`}
         className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer"
         onClick={!isDeleteModeActive ? handleClick : undefined}
      >
         <Poster
            alt={media.media_title}
            posterPath={media.media_poster}
            size="lg"
         />
         {isDeleteModeActive && (
            <DeleteSelector isSelected={isSelected} onTap={onTap} />
         )}
         <div className="absolute w-full h-full">{media.media_title}</div>
      </motion.article>
   );
}
