import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import PageHead from "@/components/PageHead";
import GenreLayout from "@/features/pages/genres/components/GenreLayout";

export default function Genres() {
   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";

   return (
      <div className="px-32 pt-32 pb-8">
         <PageHead title="Genres" />
         <motion.div
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="mt-12"
         >
            <AnimatePresence mode="wait">
               <GenreLayout key={mediaType} mediaType={mediaType} />
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
