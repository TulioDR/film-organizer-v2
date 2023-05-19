import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import * as ReactDOMServer from "react-dom/server";
import PaginationBullet from "./PaginationBullet";

type Props = {
   children: React.ReactNode;
   prevId: string;
   nextId: string;
};

export default function PersonScroll({ children, prevId, nextId }: Props) {
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
         breakpoints={{
            640: {
               slidesPerView: 4,
               slidesPerGroup: 4,
            },
            768: {
               slidesPerView: 4,
               slidesPerGroup: 4,
            },
            1280: {
               slidesPerView: 5,
               slidesPerGroup: 5,
            },
            1536: {
               slidesPerView: 7,
               slidesPerGroup: 7,
            },
         }}
         navigation={{ prevEl: `#${prevId}`, nextEl: `#${nextId}` }}
         modules={[Pagination, Navigation]}
         className="mySwiper"
      >
         {children}
      </Swiper>
   );
}
