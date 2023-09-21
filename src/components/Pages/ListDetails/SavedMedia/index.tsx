import SavedMediaContainer from "./SavedMediaContainer";
import SavedMediaCard from "./SavedMediaCard";
import { SavedMediaModel } from "@/models/MediaModel";

type Props = {
   filteredMedia: SavedMediaModel[];
   mediaToDelete: SavedMediaModel[];
   isDeleteOpen: boolean;
   onCardTap: (media: SavedMediaModel) => void;
};

export default function SavedMedia({
   filteredMedia,
   mediaToDelete,
   isDeleteOpen,
   onCardTap,
}: Props) {
   return (
      <SavedMediaContainer>
         {filteredMedia.map((media) => (
            <SavedMediaCard
               key={media.id}
               media={media}
               isSelected={mediaToDelete.includes(media)}
               onTap={() => onCardTap(media)}
               isDeleteOpen={isDeleteOpen}
            />
         ))}
      </SavedMediaContainer>
   );
}
