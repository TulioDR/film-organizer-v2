import { motion, useAnimationControls } from "framer-motion";

import GenreImage from "./GenreImage";
import GenreCardOpen from "./GenreCardOpen";
import GenreCardClosed from "./GenreCardClosed";
import GenreModel from "../../models/GenreModel";
import useBackground from "@/features/layout/background/hooks/useBackground";
import { useDispatch, useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import { useState } from "react";
import { layoutActions } from "@/store/slices/layout-slice";

type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
};

export default function GenreCard({ genre, mediaType }: Props) {
   const { changeBackground, removeBackground } = useBackground();

   const controls = useAnimationControls();
   const loader = useAnimationControls();

   const [isHovered, setIsHovered] = useState(false);
   const dispatch = useDispatch();

   const onHoverStart = async () => {
      setIsHovered(true);
      controls.start({ y: -3, rotateX: 15, scale: 1.05 });
      await loader.start({
         width: "100%",
         transition: { duration: 2 },
      });
      changeBackground(genre.id, genre.image);
      dispatch(layoutActions.hideLayout());
   };

   const onHoverEnd = () => {
      setIsHovered(false);
      controls.start({ y: 0, rotateX: 0, scale: 1 });
      loader.start({
         width: "0%",
         transition: { duration: 0.4 },
      });
      removeBackground();
      dispatch(layoutActions.revealLayout());
   };

   const { isHidden } = useSelector((state: StoreModel) => state.layout);

   const handleClick = () => {};

   return (
      <motion.div
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         onClick={handleClick}
         className="w-full aspect-[3/2] [perspective:2000px]"
         animate={{ opacity: isHidden && !isHovered ? 0 : 1 }}
         transition={{ duration: 0.2 }}
      >
         <motion.div
            animate={controls}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative origin-top [transform-style:preserve-3d] rounded-2xl overflow-hidden"
         >
            <GenreImage alt={genre.name} src={genre.image} />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4 backdrop-blur-lg">
               <div className="absolute bottom-full left-0 w-full h-1 bg-white">
                  <motion.div
                     initial={{ width: 0 }}
                     className="h-full bg-blue-500"
                     animate={loader}
                  />
               </div>
               <span className="text-lg uppercase font-title text-white truncate">
                  {genre.name}
               </span>
            </div>
         </motion.div>
      </motion.div>
   );
}
