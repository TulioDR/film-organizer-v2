import ChangeTypeButton from "./ChangeTypeButton";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function ChangeMediaType() {
   const router = useRouter();
   const { media_type } = router.query;

   const isMovie = media_type === "movie";
   const isTv = media_type === "tv";

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="flex items-center rounded-lg border border-light-1 dark:border-dark-1 overflow-hidden"
      >
         <ChangeTypeButton isSelected={isMovie} mediaType="movie">
            Movies
         </ChangeTypeButton>
         <ChangeTypeButton isSelected={isTv} mediaType="tv">
            Series
         </ChangeTypeButton>
      </motion.div>
   );
}
