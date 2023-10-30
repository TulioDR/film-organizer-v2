import { AnimatePresence, motion } from "framer-motion";

import Title from "@/components/Title";

import GenreLayout from "@/components/Pages/Genres/GenreLayout";

import PageHead from "@/components/PageHead";
import ChangeMediaType from "@/components/ChangeMediaType";
import { useRouter } from "next/router";

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
