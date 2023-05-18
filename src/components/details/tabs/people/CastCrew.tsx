import { SwiperSlide } from "swiper/react";
import Person from "./Person";
import PersonScroll from "./PersonScroll";
import InfoSubtitle from "../../InfoSubtitle";
// import NavigationButtons from "@/components/home/HomeSlider/NavigationButtons";

type Props = {
   cast: any[];
   crew: any[];
};

export default function CastCrew({ cast, crew }: Props) {
   return (
      <div className="">
         <div className="flex justify-between items-center">
            <InfoSubtitle>Cast</InfoSubtitle>
         </div>
         <PersonScroll prevId="prev-cast" nextId="next-cast">
            {cast.length
               ? cast.map((person, index) => (
                    <SwiperSlide key={index}>
                       <Person person={person} />
                    </SwiperSlide>
                 ))
               : "No information available about the crew"}
         </PersonScroll>
         <div className="flex justify-between items-center mt-10">
            <InfoSubtitle>Crew</InfoSubtitle>
         </div>
         <PersonScroll prevId="prev-crew" nextId="next-crew">
            {crew.length
               ? crew.map((person, index) => (
                    <SwiperSlide key={index}>
                       <Person person={person} />
                    </SwiperSlide>
                 ))
               : "No information available about the cast"}
         </PersonScroll>
      </div>
   );
}
