import { useState, useEffect } from "react";
import { SavedMediaModel } from "@/models/MediaModel";
import { TypeFilterModel, OrderFilterModel } from "../models/MediaFilterModel";

export default function useSavedMediaFilter(
   media: SavedMediaModel[] | null,
   list_id: string
) {
   const [filteredMedia, setFilteredMedia] = useState<SavedMediaModel[] | null>(
      null
   );
   const [orderedMedia, setOrderedMedia] = useState<SavedMediaModel[] | null>(
      null
   );
   const [selectedType, setSelectedType] = useState<TypeFilterModel>("all");
   const [sortBy, setSortBy] = useState<OrderFilterModel>("oldest");

   useEffect(() => {
      setSelectedType("all");
   }, [list_id]);

   useEffect(() => {
      if (!media) return;
      if (selectedType === "all") {
         setFilteredMedia(media);
         setOrderedMedia(media);
         return;
      }
      const filtered = media.filter(
         ({ media_type }) => media_type === selectedType
      );
      setFilteredMedia(filtered);
      setOrderedMedia(filtered);
   }, [media, selectedType]);

   useEffect(() => {
      if (!orderedMedia) return;
      if (sortBy === "oldest") {
         setFilteredMedia(orderedMedia);
      } else {
         const newMedia = [...orderedMedia];
         newMedia.reverse();
         setFilteredMedia(newMedia);
      }
   }, [sortBy, orderedMedia]);

   return { filteredMedia, selectedType, setSelectedType, sortBy, setSortBy };
}
