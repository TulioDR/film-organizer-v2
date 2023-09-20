import { AnimatePresence, motion } from "framer-motion";
import GenreModel from "../../../models/genresModel";
import { useDispatch } from "react-redux";
import { backgroundActions } from "@/store/slices/background-slice";
import { useState } from "react";

import GenreImage from "./GenreImage";
import GenreCardOpen from "./GenreCardOpen";
import GenreCardClosed from "./GenreCardClosed";

type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
};

const item = {
   initial: {
      height: 0,
   },
   animate: {
      height: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
   },
   exit: {
      height: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
   },
};

export default function GenreCard({ genre, mediaType }: Props) {
   const dispatch = useDispatch();

   const [isOpen, setIsOpen] = useState<boolean>(false);

   const handleFocus = () => {
      setIsOpen(true);
      const background = {
         backgroundImage: genre.image,
         backgroundKey: genre.id,
      };
      dispatch(backgroundActions.setBackground(background));
   };

   const handleBlur = () => {
      setIsOpen(false);
      dispatch(backgroundActions.removeBackground());
   };

   return (
      <div
         tabIndex={0}
         onFocus={handleFocus}
         onBlur={handleBlur}
         className={`h-[400px] 2xl:h-[600px] duration-500 rounded-3xl overflow-hidden ${
            isOpen ? "flex-[5]" : "flex-1 cursor-pointer"
         }`}
      >
         <motion.div variants={item} className="overflow-hidden">
            <div className="h-[400px] 2xl:h-[600px] relative">
               <GenreImage alt={genre.name} src={genre.image} />
               <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                     <GenreCardOpen
                        href={`/genres/${mediaType}/${genre.id}`}
                        key="isOpen"
                        name={genre.name}
                     />
                  ) : (
                     <GenreCardClosed key="isClosed" name={genre.name} />
                  )}
               </AnimatePresence>
            </div>
         </motion.div>
      </div>
   );
}
