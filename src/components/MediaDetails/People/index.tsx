import { useState } from "react";

import InfoSubtitle from "../InfoSubtitle";
import * as ReactDOMServer from "react-dom/server";
import Person from "./Person";
import { SwiperSlide } from "swiper/react";
import PeopleNavButtonsContainer from "./PeopleNavButtonsContainer";

import { Swiper } from "swiper/react";
import { Pagination } from "swiper";
import PaginationBullet from "./PaginationBullet";

const breakpoints = {
   640: {
      slidesPerView: 4,
      slidesPerGroup: 4,
   },
   768: {
      slidesPerView: 5,
      slidesPerGroup: 5,
   },
   1280: {
      slidesPerView: 5,
      slidesPerGroup: 5,
   },
   1536: {
      slidesPerView: 7,
      slidesPerGroup: 7,
   },
};

type Props = {
   people: any[];
   type: string;
};

export default function People({ people, type }: Props) {
   const [activeSnapIndex, setSnapActiveIndex] = useState<number>(0);
   const [scrollLength, setScrollLength] = useState<number>(0);
   return (
      <div>
         <InfoSubtitle>{type}</InfoSubtitle>
         {people.length ? (
            <Swiper
               slidesPerView={3}
               slidesPerGroup={3}
               spaceBetween={20}
               pagination={{
                  clickable: true,
                  el: ".pagination-custom-container",
                  bulletClass: "custom-bullet",
                  bulletActiveClass: "custom-bullet-active",
                  renderBullet: () => {
                     return ReactDOMServer.renderToStaticMarkup(
                        <PaginationBullet />
                     );
                  },
               }}
               onSlideChange={({ snapIndex }) => setSnapActiveIndex(snapIndex)}
               onSwiper={({ snapGrid }) => setScrollLength(snapGrid.length)}
               breakpoints={breakpoints}
               modules={[Pagination]}
               className="mySwiper relative !overflow-visible"
            >
               <PeopleNavButtonsContainer
                  activeIndex={activeSnapIndex}
                  length={scrollLength}
               />
               {people.map((person, index) => (
                  <SwiperSlide key={index}>
                     <Person person={person} />
                  </SwiperSlide>
               ))}
               <div className="w-full pagination-custom-container flex justify-center mt-1 space-x-1"></div>
            </Swiper>
         ) : (
            <div>No information available about the crew</div>
         )}
      </div>
   );
}
