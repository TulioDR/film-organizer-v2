import { SwiperSlide } from "swiper/react";
import Person from "./Person";
import PersonScroll from "./PersonScroll";
import { motion } from "framer-motion";
import RevealHorizontal from "../../../../animations/RevealHorizontal";
import NavigationButtons from "../../../home/NavigationButtons";

type Props = {
   cast: any[];
   crew: any[];
};

const container = {
   initial: { opacity: 0 },
   animate: { opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
   exit: { opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

export default function CastCrew({ cast, crew }: Props) {
   return (
      <div className="space-y-3 pt-2 overflow-y-auto h-full w-full overflow-x-hidden">
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
         >
            <div className="flex justify-between items-center">
               <RevealHorizontal>
                  <div className="text-xl font-medium mb-1">Cast</div>
               </RevealHorizontal>
               <NavigationButtons prevId="prev-cast" nextId="next-cast" />
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
         </motion.div>
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
         >
            <div className="flex justify-between items-center">
               <RevealHorizontal>
                  <div className="text-xl font-medium mb-1">Crew</div>
               </RevealHorizontal>
               <NavigationButtons prevId="prev-crew" nextId="next-crew" />
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
         </motion.div>
      </div>
   );
}
