import SavedMediaContainer from "./SavedMediaContainer";
import SavedMediaCard from "./SavedMediaCard";
import { SavedMediaModel } from "@/models/MediaModel";
import NoSavedMediaMessage from "./NoSavedMediaMessage";
import MediaFilterModel from "../../models/MediaFilterModel";
import { AnimatePresence } from "framer-motion";

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
               <SavedMediaCard
                  key={media.id}
                  media={media}
                  isSelected={mediaToDelete.includes(media)}
                  onTap={() => onCardTap(media)}
                  isDeleteModeActive={isDeleteModeActive}
               />
            ))}
         </AnimatePresence>
      </SavedMediaContainer>
   );
}
