import useBookmark from "@/hooks/useBookmark";
import useIsMediaSaved from "@/hooks/useIsMediaSaved";
import StoreModel from "@/models/StoreModel";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { SpinnerCircularFixed } from "spinners-react";
type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function MainDetailsBookmark({ mediaType, media }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   const { handleBookmarkClick } = useBookmark(media, mediaType);
   const { isMediaSaved, isLoading } = useIsMediaSaved(media.id, mediaType);

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

      document.addEventListener("scroll", handleScroll);
      return () => document.removeEventListener("scroll", handleScroll);
   }, [isFixed]);

   return (
      <div ref={buttonRef} className="h-12 aspect-square">
         <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            style={{ backgroundColor: themeColor }}
            onClick={handleBookmarkClick}
            layout="position"
            className={`h-12 grid place-content-center rounded-full aspect-square z-10 ${
               isFixed ? "fixed top-24 right-[52px]" : ""
            }`}
         >
            {isLoading ? (
               <div className="w-full h-full flex items-center justify-center">
                  <SpinnerCircularFixed
                     size={"75%"}
                     thickness={100}
                     speed={100}
                     color={"white"}
                     secondaryColor="gray"
                  />
               </div>
            ) : (
               <span className="material-icons !text-4xl">
                  {isMediaSaved ? "bookmark" : "bookmark_border"}
               </span>
            )}
         </motion.button>
      </div>
   );
}
