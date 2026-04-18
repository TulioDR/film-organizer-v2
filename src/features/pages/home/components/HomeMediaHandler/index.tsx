import { useEffect, useState } from "react";
import LearnButton from "./LearnButton";
import { AnimatePresence } from "framer-motion";
import HomePoster from "./HomePoster";
import useHomeContext from "../../context/HomeContext";

type Props = {};

export default function HomeMediaHandler({}: Props) {
   const { media, mediaGroup } = useHomeContext();

   const frontPath = media.poster_path;

   const [mediaType, setMediaType] = useState<"tv" | "movie">("movie");

   useEffect(() => {
      console.log(mediaGroup.id);
      const type = mediaGroup.id === "on_the_air" ? "tv" : "movie";
      setMediaType(type);
   }, [mediaGroup.id]);

   return (
      <div className="w-64 2xl:w-80 aspect-square relative">
         <LearnButton href={`/${mediaType}/${media.id}`} />
         <div className="aspect-[2/3] w-2/5 rounded-md border border-border-light dark:border-border-dark -translate-x-6 2xl:-translate-x-10 overflow-hidden absolute top-1/2 left-0 -translate-y-1/2">
            <AnimatePresence initial={false}>
               <HomePoster key={frontPath} frontPath={frontPath} />
            </AnimatePresence>
         </div>
      </div>
   );
}
