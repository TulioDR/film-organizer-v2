import React, { useEffect, useState } from "react";
import PreviewCard from "./PreviewCard";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";

import { AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid } from "swiper/modules";
import filterLogic, {
   PreviewInterface,
} from "@/features/pages/media-type/utils/filterLogic";
import type { Swiper as SwiperType } from "swiper";
import CompactPreview from "../../CompactFilter/CompactPreview";
import SlideButton from "./SlideButton";
type Props = {};

export default function ExpandedPreview({}: Props) {
   const context = useMediaFilterContext();
   const [activeFilters, setActiveFilters] = useState<PreviewInterface[]>([]);

   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(
      null
   );
   const [reach, setReach] = useState({ isStart: true, isEnd: false });

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

      if (swiperInstance) {
         updateNavigationState(swiperInstance);
      }
   }, [context]);

   return (
      <div className="flex h-full w-full border-t border-border-light dark:border-border-dark">
         <div className="w-80 h-full">
            <CompactPreview />
         </div>
         <div className="flex-1 text-white overflow-hidden relative flex">
            {!reach.isStart && (
               <SlideButton onClick={() => swiperInstance?.slidePrev()} left />
            )}
            {!reach.isEnd && (
               <SlideButton onClick={() => swiperInstance?.slideNext()} right />
            )}
            {reach.isStart && (
               <div className="z-10 h-full w-12 flex items-center justify-center absolute top-0 left-0 text-black dark:text-white">
                  <span className="material-symbols-outlined">filter_alt</span>
               </div>
            )}
            <div className="w-px h-full bg-border-light dark:bg-border-dark"></div>
            <Swiper
               onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                  updateNavigationState(swiper);
               }}
               onTransitionEnd={(swiper) => updateNavigationState(swiper)}
               onSlideChange={(swiper) => updateNavigationState(swiper)}
               slidesPerView={"auto"}
               grid={{ rows: 2, fill: "column" }}
               spaceBetween={8}
               modules={[Grid]}
               observer={true}
               observeParents={true}
               className="mySwiper flex-1 !h-28 !p-4 !pl-12"
            >
               <AnimatePresence>
                  {activeFilters.map((f) => (
                     <SwiperSlide key={f.id} className="!w-max">
                        <PreviewCard
                           key={f.id}
                           text={f.text}
                           icon={f.icon}
                           onRemove={f.onRemove}
                        />
                     </SwiperSlide>
                  ))}
               </AnimatePresence>
            </Swiper>
         </div>
      </div>
   );
}
