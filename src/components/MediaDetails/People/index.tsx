import React from "react";
import InfoSubtitle from "../InfoSubtitle";
import PersonScroll from "./PersonScroll";
import Person from "./Person";
import { SwiperSlide } from "swiper/react";

type Props = {
   people: any[];
   type: string;
};

export default function People({ people, type }: Props) {
   return (
      <div>
         <InfoSubtitle>{type}</InfoSubtitle>
         {people.length ? (
            <PersonScroll prevId="prev-cast" nextId="next-cast">
               {people.map((person, index) => (
                  <SwiperSlide key={index + person.id}>
                     <Person person={person} />
                  </SwiperSlide>
               ))}
               <div className="w-full pagination-custom-container flex justify-center mt-1 space-x-1"></div>
            </PersonScroll>
         ) : (
            <div>No information available about the crew</div>
         )}
      </div>
   );
}
