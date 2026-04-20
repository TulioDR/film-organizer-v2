import { useCallback, useEffect, useState } from "react";
import MediaGroup from "../models/MediaGroup";
import { Media } from "@/common/models/Media";

export default function useHomeMedia(
   allGroups: [MediaGroup, MediaGroup, MediaGroup],
   changeItem: <T extends MediaGroup | Media>(
      array: T[],
      currentItem: T,
      newItem: T,
      setItem: React.Dispatch<React.SetStateAction<T>>,
      direction?: "forward" | "backward",
   ) => void,
) {
   const [mediaGroup, setMediaGroup] = useState<MediaGroup>(allGroups[0]);
   const [media, setMedia] = useState<Media>(mediaGroup.media[0]);

   useEffect(() => {
      setMedia(mediaGroup.media[0]);
   }, [mediaGroup]);

   const changeMediaGroup = (newMediagroup: MediaGroup) => {
      changeItem(allGroups, mediaGroup, newMediagroup, setMediaGroup);
   };
   const changeMedia = (newMedia: Media, d?: "forward" | "backward") => {
      changeItem(mediaGroup.media, media, newMedia, setMedia, d);
   };

   const navigateMedia = useCallback(
      (direction: "forward" | "backward") => {
         const index = mediaGroup.media.findIndex((m) => m.id === media.id);
         let newMedia: null | Media = null;

         const lastIndex = mediaGroup.media.length - 1;
         const firstIndex = 0;

         if (direction === "forward") {
            if (index >= lastIndex) newMedia = mediaGroup.media[firstIndex];
            else newMedia = mediaGroup.media[index + 1];
         }
         if (direction === "backward") {
            if (index === firstIndex) newMedia = mediaGroup.media[lastIndex];
            else newMedia = mediaGroup.media[index - 1];
         }
         changeMedia(newMedia!, direction);
      },
      [changeMedia, mediaGroup],
   );

   return { media, mediaGroup, changeMediaGroup, changeMedia, navigateMedia };
}
