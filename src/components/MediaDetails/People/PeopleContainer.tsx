import { Swiper } from "swiper/react";
import * as ReactDOMServer from "react-dom/server";
import PaginationBullet from "./PaginationBullet";
import { Pagination } from "swiper";

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
   children: React.ReactNode;
   setSnapActiveIndex: React.Dispatch<React.SetStateAction<number>>;
   setScrollLength: React.Dispatch<React.SetStateAction<number>>;
};

export default function PeopleContainer({
   children,
   setSnapActiveIndex,
   setScrollLength,
}: Props) {
   return (
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
               return ReactDOMServer.renderToStaticMarkup(<PaginationBullet />);
            },
         }}
         onSlideChange={({ snapIndex }) => setSnapActiveIndex(snapIndex)}
         onSwiper={({ snapGrid }) => setScrollLength(snapGrid.length)}
         breakpoints={breakpoints}
         modules={[Pagination]}
         className="mySwiper relative w-full"
      >
         {children}
      </Swiper>
   );
}
