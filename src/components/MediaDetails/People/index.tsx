import { useState } from "react";
import InfoSubtitle from "../InfoSubtitle";
import Person from "./Person";
import { SwiperSlide } from "swiper/react";
import PeopleNavButtonsContainer from "./PeopleNavButtonsContainer";
import PeopleContainer from "./PeopleContainer";

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
            <PeopleContainer
               setSnapActiveIndex={setSnapActiveIndex}
               setScrollLength={setScrollLength}
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
            </PeopleContainer>
         ) : (
            <div>No information available about the crew</div>
         )}
      </div>
   );
}
