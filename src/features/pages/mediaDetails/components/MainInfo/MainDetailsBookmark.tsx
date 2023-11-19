import BookmarkButton from "@/features/bookmark/components/BookmarkButton";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function MainDetailsBookmark({ mediaType, media }: Props) {
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
      <div ref={buttonRef} className="w-10 sm:w-12">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            layout="position"
            className={`rounded-full overflow-hidden z-10 ${
               isFixed ? "fixed top-20 sm:top-24 right-5 sm:right-10" : ""
            }`}
         >
            <BookmarkButton useLoading media={media} type={mediaType} big />
         </motion.div>
      </div>
   );
}
