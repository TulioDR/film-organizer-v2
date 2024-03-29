import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Title from "@/components/Title";

import PageHead from "@/components/PageHead";
import ChangeMediaType from "@/components/ChangeMediaType";
import GenreLayout from "@/features/pages/genres/components/GenreLayout";

export default function Genres() {
   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";

   return (
      <div className="">
         <PageHead title="Genres" />
         <Title title="Genres">
            <ChangeMediaType />
         </Title>
         <motion.div exit={{ opacity: 0, transition: { duration: 0.4 } }}>
            <AnimatePresence mode="wait">
               <GenreLayout key={mediaType} mediaType={mediaType} />
            </AnimatePresence>
         </motion.div>
      </div>
   );
}
