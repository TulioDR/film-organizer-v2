import { useEffect, useState } from "react";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";

import filterLogic, {
   PreviewInterface,
} from "@/features/pages/media-type/utils/filterLogic";
import type { Swiper as SwiperType } from "swiper";
import CompactPreview from "../../CompactFilter/CompactPreview";
import SlideButton from "./SlideButton";
import PreviewSlider from "./PreviewSlider";
type Props = {};

export default function ExpandedPreview({}: Props) {
   const context = useMediaFilterContext();
   const [reach, setReach] = useState({ isStart: true, isEnd: false });
   const [activeFilters, setActiveFilters] = useState<PreviewInterface[]>([]);
   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
      null,
   );
   const updateNavigationState = (swiper: SwiperType) => {
      setTimeout(() => {
         swiper.update();
         setReach({
            isStart: swiper.isBeginning,
            isEnd: swiper.isEnd,
         });
      }, 50);
   };
   useEffect(() => {
      const result = filterLogic(context);
      setActiveFilters(result);
      if (swiperInstance) updateNavigationState(swiperInstance);
   }, [context, swiperInstance]);

   return (
      <div className="flex h-full w-full border-t border-border-light dark:border-border-dark">
         <div className="xl:w-[376px] h-full border-r border-border-light dark:border-border-dark">
            <CompactPreview />
         </div>
         <div className="flex-1 text-white overflow-hidden relative flex">
            <SlideButton
               onClick={() => swiperInstance?.slidePrev()}
               left
               isDisabled={reach.isStart}
            />
            <PreviewSlider
               activeFilters={activeFilters}
               updateNavigationState={updateNavigationState}
               setSwiperInstance={setSwiperInstance}
            />
            <SlideButton
               onClick={() => swiperInstance?.slideNext()}
               right
               isDisabled={reach.isEnd}
            />
         </div>
      </div>
   );
}
