import { SwiperSlide } from "swiper/react";
import Person from "./Person";
import PersonScroll from "./PersonScroll";
import { motion } from "framer-motion";
import RevealHorizontal from "../../../../animations/RevealHorizontal";

type Props = {
   cast: any[];
   crew: any[];
};

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      x: 200,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
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
            <RevealHorizontal>
               <div className="text-xl font-medium mb-1">Cast</div>
            </RevealHorizontal>
            <PersonScroll>
               {cast.map((person, index) => (
                  <SwiperSlide key={index}>
                     <Person person={person} />
                  </SwiperSlide>
               ))}
            </PersonScroll>
         </motion.div>
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
         >
            <RevealHorizontal>
               <div className="text-xl font-medium mb-1">Crew</div>
            </RevealHorizontal>
            <PersonScroll>
               {crew.map((person, index) => (
                  <SwiperSlide key={index}>
                     <Person person={person} />
                  </SwiperSlide>
               ))}
            </PersonScroll>
         </motion.div>
      </div>
   );
}
