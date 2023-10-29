import StoreModel from "@/models/StoreModel";
import ChangeTypeButton from "./ChangeTypeButton";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function ChangeMediaType() {
   const router = useRouter();
   const { media_type } = router.query;

   const isMovie = media_type === "movie";
   const isTv = media_type === "tv";

   const { isDarkMode } = useSelector((state: StoreModel) => state.theme);

   const { backgroundImage } = useSelector(
      (state: StoreModel) => state.background
   );
   const isDark = backgroundImage ? true : isDarkMode;
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className={`flex items-center rounded-lg border overflow-hidden ${
            isDark ? "border-dark-1" : "border-light-1"
         }`}
      >
         <ChangeTypeButton
            isSelected={isMovie}
            mediaType="movie"
            isDark={isDark}
         >
            Movies
         </ChangeTypeButton>
         <ChangeTypeButton isSelected={isTv} mediaType="tv" isDark={isDark}>
            Series
         </ChangeTypeButton>
      </motion.div>
   );
}
