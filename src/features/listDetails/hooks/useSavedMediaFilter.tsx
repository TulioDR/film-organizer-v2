import { useState, useEffect } from "react";
import { SavedMediaModel } from "@/models/MediaModel";
import MediaFilterModel from "../models/MediaFilterModel";

export default function useSavedMediaFilter(media: SavedMediaModel[] | null) {
   const [filteredMedia, setFilteredMedia] = useState<SavedMediaModel[]>([]);
   const [selectedType, setSelectedType] = useState<MediaFilterModel>("all");

   useEffect(() => {
      if (!media) return;
      if (selectedType === "all") {
         setFilteredMedia(media);
      } else {
         const filtered = media.filter(
            ({ media_type }) => media_type === selectedType
         );
         setFilteredMedia(filtered);
      }
   }, [media, selectedType]);

   return { filteredMedia, selectedType, setSelectedType };
}
