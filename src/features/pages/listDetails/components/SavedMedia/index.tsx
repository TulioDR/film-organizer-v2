import SavedMediaContainer from "./SavedMediaContainer";
import { SavedMediaModel } from "@/models/MediaModel";
import NoSavedMediaMessage from "./NoSavedMediaMessage";
import MediaFilterModel from "../../models/MediaFilterModel";
import { AnimatePresence } from "framer-motion";
import DeleteSelector from "./SavedMediaCard/DeleteSelector";
import DeleteButton from "./SavedMediaCard/DeleteButton";
import FrontTitle from "@/features/mediaCard/components/MediaCardFront/FrontTitle";
import MediaCard from "@/features/mediaCard/components/MediaCard";

type Props = {
   filteredMedia: SavedMediaModel[];
   mediaToDelete: SavedMediaModel[];
   isDeleteModeActive: boolean;
   onCardTap: (media: SavedMediaModel) => void;
   selectedType: MediaFilterModel;
};

export default function SavedMedia({
   filteredMedia,
   mediaToDelete,
   isDeleteModeActive,
   onCardTap,
   selectedType,
}: Props) {
   const noMedia = filteredMedia.length === 0;

   if (noMedia) return <NoSavedMediaMessage selectedType={selectedType} />;
   return (
      <SavedMediaContainer>
         <AnimatePresence>
            {filteredMedia.map((media) => (
               <MediaCard
                  key={media.id}
                  savedMedia
                  mediaType={media.media_type}
                  mediaId={media.media_id}
                  poster={media.media_poster}
                  title={media.media_title}
                  backdrop={media.media_backdrop}
                  releaseDate={media.media_release_date}
                  overview={media.media_overview || "N/A"}
                  backButton={<DeleteButton />}
                  cardFront={
                     isDeleteModeActive ? (
                        <DeleteSelector
                           isSelected={mediaToDelete.includes(media)}
                           onTap={() => onCardTap(media)}
                        />
                     ) : (
                        <FrontTitle title={media.media_title} />
                     )
                  }
               />
            ))}
         </AnimatePresence>
      </SavedMediaContainer>
   );
}
