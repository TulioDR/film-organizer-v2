import SavedMediaContainer from "./SavedMediaContainer";
import SavedMediaCard from "./SavedMediaCard";
import { SavedMediaModel } from "@/models/MediaModel";
import NoSavedMediaMessage from "./NoSavedMediaMessage";

type Props = {
   filteredMedia: SavedMediaModel[];
   mediaToDelete: SavedMediaModel[];
   isDeleteModeActive: boolean;
   onCardTap: (media: SavedMediaModel) => void;
};

export default function SavedMedia({
   filteredMedia,
   mediaToDelete,
   isDeleteModeActive,
   onCardTap,
}: Props) {
   const noMedia = filteredMedia.length === 0;

   if (noMedia) return <NoSavedMediaMessage />;
   return (
      <SavedMediaContainer>
         {filteredMedia.map((media) => (
            <SavedMediaCard
               key={media.id}
               media={media}
               isSelected={mediaToDelete.includes(media)}
               onTap={() => onCardTap(media)}
               isDeleteModeActive={isDeleteModeActive}
            />
         ))}
      </SavedMediaContainer>
   );
}
