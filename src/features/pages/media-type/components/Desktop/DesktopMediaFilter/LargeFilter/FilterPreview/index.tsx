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
type Props = {};

export default function FilterPreview({}: Props) {
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
      <div className="w-full bg-accent text-white overflow-hidden relative flex border-t border-border-light dark:border-border-dark">
         {!reach.isEnd && (
            <button
               onClick={() => swiperInstance?.slideNext()}
               className="z-10 absolute top-0 right-0 w-8 h-full bg-black dark:bg-white border-r border-border-light dark:border-border-dark"
            >
               <span className="material-symbols-outlined">chevron_right</span>
            </button>
         )}
         {!reach.isStart && (
            <button
               onClick={() => swiperInstance?.slidePrev()}
               className="z-10 absolute top-0 left-0 w-8 h-full bg-black dark:bg-white border-l border-border-light dark:border-border-dark"
            >
               <span className="material-symbols-outlined">chevron_left</span>
            </button>
         )}
         <div className="h-full w-8 flex items-center justify-center absolute top-0 left-0 border-r border-border-light dark:border-border-dark">
            <span className="material-symbols-outlined">filter_alt</span>
         </div>
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
   );
}
