import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";
import Title from "@/components/Title";
import PageHead from "@/components/PageHead";
import { AnimatePresence } from "framer-motion";

import { useRouter } from "next/router";
import SearchMediaHandler from "./SearchMediaHandler";

type Props = {
   title: string;
   apiUrl: string;
};

export default function SearchMedia({ title, apiUrl }: Props) {
   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";
   const fullApiUrl = `/${mediaType}${apiUrl}`;

   if (!mediaType) return <></>;
   return (
      <TransitionPosterProvider>
         <div className="p-32">
            <PageHead title={title} />
            <Title title={title} />
            <AnimatePresence mode="wait">
               <SearchMediaHandler
                  key={mediaType}
                  mediaType={mediaType}
                  apiUrl={fullApiUrl}
               />
            </AnimatePresence>
         </div>
      </TransitionPosterProvider>
   );
}
