import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";
import { Media } from "@/common/models/Media";

type Props = {
   media: Media;
   isLoading: boolean;
};

export default function BackHeader({ media, isLoading }: Props) {
   const title = media.name || media.title;
   const backdrop = media.backdrop_path;

   return (
      <motion.div
         initial={false}
         animate={{ height: isLoading ? 0 : "auto" }}
         transition={{ duration: 0.2 }}
         className="relative w-full overflow-hidden"
      >
         <Poster alt={title} posterPath={backdrop} size="original" back />
      </motion.div>
   );
}
