import useListsContext from "@/context/ListsContext";
import useThemeContext from "@/context/ThemeContext";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function MainBookmark({ mediaType, media }: Props) {
   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);
   const { themeColor } = useThemeContext();
   const { openBookmark } = useListsContext();

   const buttonRef = useRef<HTMLDivElement>(null);
   const [isFixed, setIsFixed] = useState<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         const buttonTop = buttonRef.current!.getBoundingClientRect().top;
         if (buttonTop < 70) {
            if (!isFixed) setIsFixed(true);
         } else {
            if (isFixed) setIsFixed(false);
         }
      };
      const container = document.getElementById("scroll-container")!;

      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
   }, [isFixed]);

   return (
      <div ref={buttonRef} className="relative h-12 aspect-square">
         <motion.button
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.4 }}
            style={{ backgroundColor: themeColor }}
            onClick={() => openBookmark(mediaType, media)}
            layout="position"
            className={`h-12 grid place-content-center rounded-full aspect-square z-10 ${
               isFixed ? "fixed top-24 right-[52px]" : ""
            }`}
         >
            <span className="material-icons !text-4xl">
               {isMediaSaved ? "bookmark" : "bookmark_border"}
            </span>
         </motion.button>
      </div>
   );
}
