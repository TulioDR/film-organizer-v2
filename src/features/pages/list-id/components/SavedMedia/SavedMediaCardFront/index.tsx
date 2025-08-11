import { AnimatePresence } from "framer-motion";
import React from "react";

import FrontTitle from "@/features/mediaCard/components/MediaCardFront/FrontTitle";
import DeleteSelector from "./DeleteSelector";
import { SavedMedia } from "@/common/models/Media";

type Props = {
   isDeleteModeActive: boolean;
   mediaToDelete: SavedMedia[];
   media: SavedMedia;
   markToDelete: () => void;
};

export default function SavedMediaCardFront({
   isDeleteModeActive,
   mediaToDelete,
   media,
   markToDelete,
}: Props) {
   return (
      <AnimatePresence mode="wait">
         {isDeleteModeActive ? (
            <DeleteSelector
               key="delete"
               isSelected={mediaToDelete.includes(media)}
               markToDelete={markToDelete}
            />
         ) : (
            <FrontTitle key="title" title={media.media_title} />
         )}
      </AnimatePresence>
   );
}
