import { motion } from "framer-motion";
import Image from "next/image";

import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

type Props = {
   alt: string;
   posterPath: string;
};

export default function MainPoster({ alt, posterPath }: Props) {
   const { animatePoster } = useSelector(
      (state: StoreModel) => state.posterAnimation
   );
   return (
      <div className="overflow-hidden">
         <motion.div
            initial={{ x: animatePoster ? "-100%" : 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="aspect-[2/3] h-full relative w-2/3 sm:w-1/2 md:w-auto"
         >
            <Image
               alt={alt}
               src={`https://image.tmdb.org/t/p/w${780}${posterPath}`}
               placeholder="empty"
               fill
               sizes="100%"
               priority
               className="rounded-3xl"
            />
         </motion.div>
      </div>
   );
}
