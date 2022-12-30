import { motion } from "framer-motion";
import MediaModel from "../../models/MediaModel";
import Poster from "../Poster";

type Props = {
   media: any;
   isDeleteOpen: boolean;
   mediaToDelete: MediaModel[];
   setMediaToDelete: React.Dispatch<React.SetStateAction<MediaModel[]>>;
};

export default function SavedCard({
   media,
   isDeleteOpen,
   mediaToDelete,
   setMediaToDelete,
}: Props) {
   const isSelected = mediaToDelete.includes(media);

   const onTap = () => {
      if (isSelected) {
         setMediaToDelete((old) => old.filter(({ id }) => id !== media.id));
      } else {
         setMediaToDelete((old) => [...old, media]);
      }
   };

   return (
      <div className="relative rounded-xl overflow-hidden">
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
      </div>
   );
}
