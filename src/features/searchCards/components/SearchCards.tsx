import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";
import Title from "@/components/Title";
import PageHead from "@/components/PageHead";
import { motion, AnimatePresence } from "framer-motion";

import MainCards from "./MainCards";
import ChangeMediaType from "@/components/ChangeMediaType";
import { useRouter } from "next/router";

type Props = {
   title: string;
   apiUrl: string;
   noRemoveBackground?: true;
};

export default function SearchCards({
   title,
   apiUrl,
   noRemoveBackground,
}: Props) {
   useRemoveBackgroundImage(noRemoveBackground);

   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";

   const fullApiUrl = `/${mediaType}${apiUrl}`;

   return (
      <TransitionPosterProvider>
         <PageHead title={title} />
         <Title title={title}>
            <ChangeMediaType />
         </Title>

         <motion.div exit={{ opacity: 0, transition: { duration: 0.4 } }}>
            <AnimatePresence mode="wait">
               <MainCards
                  key={mediaType}
                  mediaType={mediaType}
                  apiUrl={fullApiUrl}
               />
            </AnimatePresence>
         </motion.div>
      </TransitionPosterProvider>
   );
}
