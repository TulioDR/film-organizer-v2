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
         className="relative cursor-pointer rounded-lg group aspect-[2/3] overflow-hidden"
      >
         <motion.div
            animate={{
               y: isHovering ? -height : 0,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full"
         >
            <Poster alt={tv.name} posterPath={tv.poster_path} size="lg" />
            <div
               ref={elRef}
               className="text-center font-normal sm:font-medium text-xs sm:text-sm w-full px-4"
            >
               {tv.name}
            </div>
         </motion.div>
      </motion.div>
   );
}
