import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
   alt: string;
   posterPath: string;
};

export default function MainPoster({ alt, posterPath }: Props) {
   return (
      <motion.div
         exit={{
            x: "-100%",
            transition: { duration: 0.4, ease: "easeInOut" },
         }}
         className="aspect-[2/3] flex-shrink-0 w-2/3 mx-auto sm:mx-0 sm:w-1/2 md:w-2/5 relative xl:h-full xl:w-auto rounded-xl overflow-hidden"
      >
         <Image
            alt={alt}
            src={`https://image.tmdb.org/t/p/w${780}${posterPath}`}
            placeholder="empty"
            fill
            sizes="100%"
            priority
         />
      </motion.div>
   );
}
