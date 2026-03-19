import React from "react";
import LearnButton from "./LearnButton";
import { AnimatePresence } from "framer-motion";
import HomePoster from "./HomePoster";
import useHomeContext from "../../context/HomeContext";
import NavigationButton from "./NavigationButton";

type Props = {};

export default function HomeMediaHandler({}: Props) {
   const { navigateMedia, media } = useHomeContext();
   const goPrev = () => navigateMedia("backward");
   const goNext = () => navigateMedia("forward");

   const frontPath = media.poster_path;

   return (
      <div className="w-64 2xl:w-96 relative flex flex-col gap-4 items-center ">
         <div className="h-16 flex gap-4 2xl:absolute top-0 right-full 2xl:translate-x-10 z-10">
            <NavigationButton icon="chevron_backward" onClick={goPrev} />
            <NavigationButton icon="chevron_forward" onClick={goNext} />
         </div>
         <div className="w-full aspect-square relative">
            <LearnButton />
            <div className="aspect-[2/3] w-2/5 rounded-xl border border-border-light dark:border-border-dark -translate-x-6 2xl:-translate-x-10 overflow-hidden absolute top-1/2 left-0 -translate-y-1/2">
               <AnimatePresence initial={false}>
                  <HomePoster key={frontPath} frontPath={frontPath} />
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
}
