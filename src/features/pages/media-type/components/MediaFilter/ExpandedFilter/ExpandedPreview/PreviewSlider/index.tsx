import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { AnimatePresence } from "framer-motion";
import { PreviewInterface } from "@/features/pages/media-type/utils/filterLogic";
import PreviewCard from "./PreviewCard";

type Props = {
   activeFilters: PreviewInterface[];
   updateNavigationState: (swiper: SwiperType) => void;
   setSwiperInstance: (swiper: SwiperType | null) => void;
};

export default function PreviewSlider({
   activeFilters,
   updateNavigationState,
   setSwiperInstance,
}: Props) {
   return (
      <Swiper
         onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            updateNavigationState(swiper);
         }}
         onTransitionEnd={(swiper) => updateNavigationState(swiper)}
         onSlideChange={(swiper) => updateNavigationState(swiper)}
         slidesPerView={"auto"}
         spaceBetween={8}
         observer={true}
         observeParents={true}
         className="mySwiper flex-1 h-full !p-3"
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
   );
}
