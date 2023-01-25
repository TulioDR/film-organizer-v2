import { motion } from "framer-motion";
import Image from "next/image";
import useListsContext from "../../context/ListsContext";
import usePosterAnimationContext from "../../context/PosterAnimationContext";
import useThemeContext from "../../context/ThemeContext";
import useIsMediaSaved from "../../hooks/useIsMediaSaved";

type Props = {
   alt: string;
   posterPath: string;
   media: any;
   mediaType: "movie" | "tv";
};

export default function MainPoster({
   alt,
   posterPath,
   media,
   mediaType,
}: Props) {
   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);
   const { openBookmark } = useListsContext();
   const { themeColor } = useThemeContext();
   const { animatePoster } = usePosterAnimationContext();

   return (
      <motion.div
         initial={{ x: animatePoster ? "-100%" : 0 }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="aspect-[2/3] flex-shrink-0 w-2/3 mx-auto sm:mx-0 sm:w-1/2 md:w-2/5 relative xl:h-full xl:w-auto"
      >
         <Image
            alt={alt}
            src={`https://image.tmdb.org/t/p/w${780}${posterPath}`}
            placeholder="empty"
            fill
            sizes="100%"
            priority
            className="rounded-xl"
         />
         <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ backgroundColor: themeColor }}
            onClick={() => openBookmark(mediaType, media)}
            className="absolute bottom-20 w-12 h-14 right-0 translate-x-1/2 grid place-content-center rounded-md"
         >
            <span className="material-icons text-5xl">
               {isMediaSaved ? "bookmark" : "bookmark_border"}
            </span>
         </motion.button>
      </motion.div>
   );
}
