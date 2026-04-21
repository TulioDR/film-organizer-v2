import { motion } from "framer-motion";
import Bookmark from "@/features/bookmark/components/Bookmark";
import useAppSelector from "@/store/hooks/useAppSelector";

type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function Button({ mediaType, media }: Props) {
   const { hideUi } = useAppSelector((state) => state.background);
   return (
      <motion.div
         layoutId="details-bookmark"
         transition={{ layout: { duration: 0.3 } }}
         className="w-full h-full relative z-20"
      >
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hideUi ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
         >
            <Bookmark media={media} mediaType={mediaType} />
         </motion.div>
      </motion.div>
   );
}
