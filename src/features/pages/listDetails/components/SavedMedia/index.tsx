import SavedMediaContainer from "./SavedMediaContainer";
import { SavedMediaModel } from "@/models/MediaModel";
import NoSavedMediaMessage from "./NoSavedMediaMessage";

import { AnimatePresence } from "framer-motion";
import DeleteButton from "./SavedMediaCardFront/DeleteButton";
import MediaCard from "@/features/mediaCard/components/MediaCard";
import SavedMediaCardFront from "./SavedMediaCardFront";
import { TypeFilterModel } from "../../models/MediaFilterModel";

type Props = {
   filteredMedia: SavedMediaModel[];
   mediaToDelete: SavedMediaModel[];
   isDeleteModeActive: boolean;
   onCardTap: (media: SavedMediaModel) => void;
   selectedType: TypeFilterModel;
   listId: string;
   refresh: () => void;
};

export default function SavedMedia({
   filteredMedia,
   mediaToDelete,
   isDeleteModeActive,
   onCardTap,
   selectedType,
   listId,
   refresh,
}: Props) {
   const noMedia = filteredMedia.length === 0;

   if (noMedia) return <NoSavedMediaMessage selectedType={selectedType} />;
   return (
      <SavedMediaContainer>
         <AnimatePresence>
            {filteredMedia.map((media) => (
               <MediaCard
                  key={media.id}
                  mediaType={media.media_type}
                  media={media}
                  cardFront={
                     <SavedMediaCardFront
                        isDeleteModeActive={isDeleteModeActive}
                        media={media}
                        markToDelete={() => onCardTap(media)}
                        mediaToDelete={mediaToDelete}
                     />
                  }
               />
            ))}
         </AnimatePresence>
      </SavedMediaContainer>
   );
}
