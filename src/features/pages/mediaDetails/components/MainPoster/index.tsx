import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
   alt: string;
   posterPath: string;
};

export default function MainPoster({ alt, posterPath }: Props) {
   return (
      <motion.div
         exit={{ x: "-100%" }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="aspect-[2/3] relative w-full sm:w-auto sm:h-full"
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
   );
}
