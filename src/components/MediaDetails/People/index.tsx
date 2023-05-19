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
         <PersonScroll prevId="prev-cast" nextId="next-cast">
            {people.length
               ? people.map((person, index) => (
                    <SwiperSlide key={index}>
                       <Person person={person} />
                    </SwiperSlide>
                 ))
               : "No information available about the crew"}
         </PersonScroll>
      </div>
   );
}
