import { Media } from "@/common/models/Media";
import { createContext, useContext } from "react";
import MediaGroup from "../models/MediaGroup";
import useIsForward from "../hooks/useIsForward";
import useIsAnimating from "../hooks/useIsAnimating";
import useHomeMedia from "../hooks/useHomeMedia";
import useAutoPlay from "../hooks/useAutoPlay";
import { AnimationScope } from "framer-motion";

export interface HomeContextInterface {
   isAnimating: boolean;
   media: Media;
   mediaGroup: MediaGroup;
   allGroups: [MediaGroup, MediaGroup, MediaGroup];
   changeMediaGroup: (newMediagroup: MediaGroup) => void;
   changeMedia: (newMedia: Media, d?: "forward" | "backward") => void;
   navigateMedia: (direction: "forward" | "backward") => void;
   isForward: boolean;
   isAutoPlay: boolean;
   startAutoPlay: () => void;
   stopAutoPlay: () => void;
   scope: AnimationScope<any>;
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
   const { isForward, changeItem } = useIsForward();

   const { media, mediaGroup, changeMediaGroup, changeMedia, navigateMedia } =
      useHomeMedia(allGroups, changeItem);

   const { isAutoPlay, startAutoPlay, stopAutoPlay, scope } =
      useAutoPlay(navigateMedia);

   const { isAnimating } = useIsAnimating(media);

   const value: HomeContextInterface = {
      isAnimating,
      media,
      mediaGroup,
      allGroups,
      changeMediaGroup,
      changeMedia,
      navigateMedia,
      isForward,
      isAutoPlay,
      startAutoPlay,
      stopAutoPlay,
      scope,
   };

   return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
