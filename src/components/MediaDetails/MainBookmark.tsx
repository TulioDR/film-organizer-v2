import useBookmark from "@/hooks/useBookmark";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";
import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function MainBookmark({ mediaType, media }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   const { isMediaSaved } = useIsMediaSaved(media.id, mediaType);
   const { handleBookmarkClick } = useBookmark(media, mediaType);

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
            style={{ backgroundColor: themeColor }}
            onClick={handleBookmarkClick}
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
