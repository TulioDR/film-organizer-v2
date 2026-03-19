import { Media } from "@/common/models/Media";
import { useState } from "react";
import MediaGroup from "../models/MediaGroup";

export default function useIsForward() {
   const [isForward, setIsForward] = useState(true);
   const changeItem = <T extends Media | MediaGroup>(
      array: T[],
      currentItem: T,
      newItem: T,
      setItem: React.Dispatch<React.SetStateAction<T>>,
      direction?: "forward" | "backward",
   ) => {
      if (direction) {
         setIsForward(direction === "forward");
      } else {
         const currentIdx = array.findIndex((i) => i.id === currentItem.id);
         const nextIdx = array.findIndex((i) => i.id === newItem.id);
         setIsForward(nextIdx > currentIdx);
      }
      setTimeout(() => setItem(newItem), 10);
   };
   return { isForward, changeItem };
}
