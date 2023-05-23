import { motion } from "framer-motion";
import Image from "next/image";

import usePosterAnimationContext from "../../../context/PosterAnimationContext";

type Props = {
   alt: string;
   posterPath: string;
};

export default function MainPoster({ alt, posterPath }: Props) {
   const { animatePoster } = usePosterAnimationContext();
   return (
      <motion.div
         initial={{ x: animatePoster ? "-100%" : 0 }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="aspect-[2/3] h-full relative"
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
      </motion.div>
   );
}
