import SavedMediaContainer from "./SavedMediaContainer";
import NoSavedMediaMessage from "./NoSavedMediaMessage";

import { AnimatePresence } from "framer-motion";
import DeleteButton from "./SavedMediaCardFront/DeleteButton";
import SavedMediaCardFront from "./SavedMediaCardFront";
import { TypeFilterModel } from "../../models/MediaFilterModel";
import { SavedMedia } from "@/common/models/Media";
import MediaCard from "@/features/media-card/components/MediaCard";

type Props = {
   filteredMedia: SavedMedia[];
   mediaToDelete: SavedMedia[];
   isDeleteModeActive: boolean;
   onCardTap: (media: SavedMedia) => void;
   selectedType: TypeFilterModel;
   listId: string;
   refresh: () => void;
};

export default function SavedMediaCards({
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
