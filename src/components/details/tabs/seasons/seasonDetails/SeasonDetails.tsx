import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import RevealHorizontal from "../../../../../animations/RevealHorizontal";
import { staggerContainer } from "../../../../../animations/StaggerCards";
import EpisodeCard from "../../../../../layout/cards/EpisodeCard";
import Date from "../../../infoBar/Date";
type Props = {
   tvShowID: number;
   selectedSeason: number | null;
   setSelectedSeason: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function SeasonDetails({
   tvShowID,
   selectedSeason,
   setSelectedSeason,
}: Props) {
   const [season, setSeason] = useState<any>(null);
   const [data, setData] = useState<any>(null);
   useEffect(() => {
      if (selectedSeason === null) return;
      const getData = async () => {
         const url = `https://api.themoviedb.org/3/tv/${tvShowID}/season/${selectedSeason}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
         setData(data);
      };
      getData();
   }, [selectedSeason, tvShowID]);

   const close = () => {
      setSelectedSeason(null);
   };

   const onAnimationComplete = (e: any) => {
      console.log("complete", e);
      console.log(e);
      if (e.x === 0) {
         console.log("set the data");
         setSeason(data);
      } else {
         setSeason(null);
      }
   };

   const container = {
      initial: {},
      animate: {
         transition: {
            staggerChildren: 0.15,
         },
      },
      exit: {},
   };

   return (
      <AnimatePresence>
         {selectedSeason !== null && (
            <motion.div
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               onAnimationComplete={onAnimationComplete}
               className="absolute top-0 right-0 h-full w-full bg-light-bg-primary dark:bg-dark-bg-primary z-10 overflow-y-auto overflow-x-hidden pr-5 main-scrollbar"
            >
               {season ? (
                  <motion.div
                     variants={container}
                     initial="initial"
                     animate="animate"
                     exit="exit"
                     className="w-full h-full relative"
                  >
                     <div className="absolute z-10 top-0 right-0">
                        <RevealHorizontal stagger fromRight>
                           <button
                              onClick={close}
                              className=" w-10 h-10 rounded-md bg-light-bg-secondary text-light-text-hard dark:bg-dark-bg-secondary dark:text-dark-text-hard grid place-content-center shadow-lg"
                           >
                              <span className="material-icons">close</span>
                           </button>
                        </RevealHorizontal>
                     </div>
                     <RevealHorizontal stagger>
                        <div className="text-4xl 2xl:text-5xl font-semibold text-light-text-hard dark:text-dark-text-hard">
                           {season.name}
                        </div>
                     </RevealHorizontal>
                     <RevealHorizontal stagger>
                        <div className="flex items-center text-light-text-soft dark:text-dark-text-soft mt-3 text-sm">
                           <Date date={season.air_date} />
                           <span className="mx-2">|</span>
                           <span>{season.episodes.length} episodes</span>
                        </div>
                     </RevealHorizontal>
                     <RevealHorizontal stagger>
                        <div className="mt-3 text-light-text-normal dark:text-dark-text-normal">
                           {season.overview ||
                              "No overview available for this season"}
                        </div>
                     </RevealHorizontal>
                     <RevealHorizontal stagger>
                        <div className="my-8 text-light-text-hard dark:text-dark-text-hard text-3xl 2xl:text-4xl font-medium">
                           Episodes
                        </div>
                     </RevealHorizontal>
                     <motion.div
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-10"
                     >
                        {season.episodes.map((ep: any) => (
                           <EpisodeCard key={ep.id} episode={ep} />
                        ))}
                     </motion.div>
                  </motion.div>
               ) : (
                  <div className="h-full w-full flex items-center justify-center">
                     <div className="w-40 h-40 bg-blue-500">Loading...</div>
                  </div>
               )}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
