import { useEffect, useRef, useState } from "react";
import useMediaDetails from "../../../hooks/useMediaDetails";
import Poster from "../../Poster";
import { motion } from "framer-motion";

type Props = { tv: any };

export default function OnAir({ tv }: Props) {
   const { getMediaDetails } = useMediaDetails();
   const elRef = useRef<HTMLDivElement>(null);
   const [height, setHeight] = useState<number>(0);
   const [isHovering, setIsHovering] = useState<boolean>(false);

   useEffect(() => {
      const newHeight = elRef.current!.clientHeight;
      setHeight(newHeight);
   }, []);

   return (
      <motion.div
         onHoverStart={() => setIsHovering(true)}
         onHoverEnd={() => setIsHovering(false)}
         onClick={() => getMediaDetails("tv", tv.id)}
         className="relative cursor-pointer group aspect-[2/3] overflow-hidden"
      >
         <div className="w-full h-full">
            <motion.div
               animate={{
                  height: isHovering ? `calc(100% - ${height}px)` : "100%",
               }}
               transition={{ duration: 0.2, ease: "easeInOut" }}
               className="overflow-hidden rounded-2xl"
            >
               <div className="w-full">
                  <Poster alt={tv.name} posterPath={tv.poster_path} size="lg" />
               </div>
            </motion.div>
            <div
               ref={elRef}
               className="text-center font-normal sm:font-medium text-xs sm:text-sm w-full px-4"
            >
               {tv.name}
            </div>
         </div>
      </motion.div>
   );
}
