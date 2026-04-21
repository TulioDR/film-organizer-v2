import { Media } from "@/common/models/Media";
import { createContext, useContext, useState } from "react";
import MediaGroup from "../models/MediaGroup";
import useIsAnimating from "../hooks/useIsAnimating";

export interface HomeContextInterface {
   isAnimating: boolean;
   currentMedia: Media;
   currentGroup: MediaGroup;
   allGroups: [MediaGroup, MediaGroup, MediaGroup];
   changeMediaGroup: (newIndex: number) => void;
   changeMedia: (newIndex: number) => void;
   navigateMedia: (direction: 1 | -1) => void;
   direction: 1 | -1;
   startAutoPlay: () => void;
   stopAutoPlay: () => void;
   isAutoPlayActive: boolean;
   mediaIndex: number;
   groupIndex: number;
}

const HomeContext = createContext({} as HomeContextInterface);

export default function useHomeContext() {
   return useContext(HomeContext);
}

interface Props {
   children: React.ReactNode;
   allGroups: [MediaGroup, MediaGroup, MediaGroup];
}

export function HomeProvider({ children, allGroups }: Props) {
   const [mediaIndex, setMediaIndex] = useState(0);
   const [groupIndex, setGroupIndex] = useState(0);
   const [direction, setDirection] = useState<1 | -1>(1);
   const [isAutoPlayActive, setIsAutoPlayActive] = useState(false);

   const currentGroup = allGroups[groupIndex];
   const currentMedia = currentGroup.media[mediaIndex];

   const startAutoPlay = () => setIsAutoPlayActive(true);
   const stopAutoPlay = () => setIsAutoPlayActive(false);

   const changeMediaGroup = (newIndex: number) => {
      const direction = newIndex > groupIndex ? 1 : -1;
      setDirection(direction);
      setGroupIndex(newIndex);
      setMediaIndex(0);
   };

   const changeMedia = (newIndex: number) => {
      const direction = newIndex > mediaIndex ? 1 : -1;
      setDirection(direction);
      setMediaIndex(newIndex);
   };

   const navigateMedia = (direction: 1 | -1) => {
      const total = allGroups[groupIndex].media.length;
      let newIndex;
      if (direction > 0) newIndex = (mediaIndex + 1) % total;
      else newIndex = (mediaIndex - 1 + total) % total;
      changeMedia(newIndex);
   };

   const { isAnimating } = useIsAnimating(mediaIndex);

   const value: HomeContextInterface = {
      isAnimating,
      currentMedia,
      currentGroup,
      allGroups,
      changeMediaGroup,
      changeMedia,
      navigateMedia,
      direction,
      isAutoPlayActive,
      startAutoPlay,
      stopAutoPlay,
      mediaIndex,
      groupIndex,
   };

   return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
