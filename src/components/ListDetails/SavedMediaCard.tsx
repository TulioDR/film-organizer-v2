import { motion } from "framer-motion";
import { staggerItem } from "../../animations/StaggerCards";
import useTransitionCard from "../../features/transitionPoster/hooks/useTransitionCard";
import { SavedMediaModel } from "../../models/MediaModel";
import Poster from "../Poster";
import { useDispatch } from "react-redux";
import { posterAnimationActions } from "@/store/slices/poster-animation-slice";

type Props = {
   media: any;
   isDeleteOpen: boolean;
   mediaToDelete: SavedMediaModel[];
   setMediaToDelete: React.Dispatch<React.SetStateAction<SavedMediaModel[]>>;
   setTransitionValues: (
      posterPath: string,
      link: string,
      element: HTMLDivElement
   ) => void;
   leavingPage: () => void;
};

export default function SavedMediaCard({
   media,
   isDeleteOpen,
   mediaToDelete,
   setMediaToDelete,
   setTransitionValues,
   leavingPage,
}: Props) {
   const isSelected = mediaToDelete.includes(media);
   const onTap = () => {
      if (isSelected) {
         setMediaToDelete((old) => old.filter(({ id }) => id !== media.id));
      } else {
         setMediaToDelete((old) => [...old, media]);
      }
   };

   const dispatch = useDispatch();
   const { transitionCard, isInvisible, setIsInvisible } = useTransitionCard();
   const handleClick = () => {
      dispatch(posterAnimationActions.changePosterAnimation(false));
      const link = `/${media.media_type}/${media.media_id}`;
      const element = transitionCard.current!;
      setTransitionValues(media.poster_path, link, element);
      setIsInvisible(true);
      leavingPage();
   };

   return (
      <motion.article
         layout
         variants={staggerItem}
         ref={transitionCard}
         className={`relative rounded-xl overflow-hidden ${
            isInvisible ? "invisible" : "shadow-xl cursor-pointer"
         }`}
         onClick={!isDeleteOpen ? handleClick : undefined}
      >
         <Poster alt={media.name} posterPath={media.poster_path} size="lg" />
         {isDeleteOpen && (
            <div
               className={`absolute top-0 left-0 w-full h-full rounded-xl cursor-pointer overflow-hidden ${
                  isSelected ? "border-4 border-red-700" : ""
               }`}
            >
               <div
                  className={`bg-black duration-200 w-full h-full ${
                     isSelected
                        ? "bg-opacity-50"
                        : "bg-opacity-0 hover:bg-opacity-50"
                  }`}
               >
                  <motion.div
                     onTap={onTap}
                     initial={{ opacity: 0 }}
                     animate={{
                        opacity: isSelected ? 1 : 0,
                        scale: isSelected ? 1.1 : 0.8,
                     }}
                     whileTap={{ scale: 0.8 }}
                     whileHover={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.2 }}
                     className="h-full w-full grid place-content-center select-none"
                  >
                     <span className="material-icons text-9xl text-red-700 ">
                        delete
                     </span>
                  </motion.div>
               </div>
            </div>
         )}
         <div className="absolute w-full h-full">{media.name}</div>
      </motion.article>
   );
}
