import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import filterLogic, {
   PreviewInterface,
} from "@/features/pages/media-type/utils/filterLogic";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence } from "framer-motion";
import PreviewCard from "../../../Desktop/DesktopMediaFilter/ExpandedFilter/ExpandedPreview/PreviewCard";
type Props = {};

export default function MobilePreview({}: Props) {
   const context = useMediaFilterContext();
   const [activeFilters, setActiveFilters] = useState<PreviewInterface[]>([]);

   useEffect(() => {
      const result = filterLogic(context);
      setActiveFilters(result);
   }, [context]);

   return (
      <div className="w-full overflow-hidden">
         <Swiper
            slidesPerView={"auto"}
            spaceBetween={4}
            observer={true}
            observeParents={true}
            className="mySwiper w-full !p-1"
         >
            <AnimatePresence>
               {activeFilters.map((f) => (
                  <SwiperSlide key={f.id} className="!w-max">
                     <PreviewCard
                        key={f.id}
                        text={f.text}
                        icon={f.icon}
                        onRemove={f.onRemove}
                        small
                     />
                  </SwiperSlide>
               ))}
            </AnimatePresence>
         </Swiper>
      </div>
   );
}
