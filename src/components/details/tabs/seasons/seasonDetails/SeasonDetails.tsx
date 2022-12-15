import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import RevealHorizontal from "../../../../../animations/RevealHorizontal";
import EpisodeCard from "../../../../../layout/cards/EpisodeCard";
import Date from "../../../infoBar/Date";
type Props = {
   tvShowID: number;
   selectedSeason: number | null;
   setSelectedSeason: React.Dispatch<React.SetStateAction<number | null>>;
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SeasonDetails({
   tvShowID,
   selectedSeason,
   setSelectedSeason,
   setSelectedImg,
}: Props) {
   const [season, setSeason] = useState<any>(null);
   useEffect(() => {
      if (selectedSeason === null) return;
      const getData = async () => {
         const url = `https://api.themoviedb.org/3/tv/${tvShowID}/season/${selectedSeason}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
         setSeason(data);
      };
      getData();
   }, [selectedSeason, tvShowID]);

   const close = () => {
      setSelectedSeason(null);
      setSelectedImg(null);
   };

   return (
      <AnimatePresence>
         {selectedSeason !== null && season && (
            <motion.div
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.4, ease: "easeInOut" }}
               className="absolute top-0 right-0 h-full w-full bg-light-bg dark:bg-dark-bg z-10 overflow-hidden overflow-y-auto pr-5 main-scrollbar"
            >
               <div className="w-full h-full relative">
                  <button
                     onClick={close}
                     className="absolute z-10 top-0 right-0 w-10 h-10 rounded-md bg-light-text-hard text-dark-text-hard dark:bg-dark-text-hard dark:text-light-text-hard grid place-content-center"
                  >
                     <span className="material-icons">close</span>
                  </button>
                  <RevealHorizontal>
                     <div className="text-4xl 2xl:text-5xl font-semibold text-light-text-hard dark:text-dark-text-hard">
                        {season.name}
                     </div>
                     <div className="flex items-center text-light-text-soft dark:text-dark-text-soft mt-3 text-sm">
                        <Date date={season.air_date} />
                        <span className="mx-2">|</span>
                        <span>{season.episodes.length} episodes</span>
                     </div>
                     <div className="mt-3 text-light-text-normal dark:text-dark-text-normal">
                        {season.overview ||
                           "No overview available for this season"}
                     </div>
                     <div className="my-8 text-light-text-hard dark:text-dark-text-hard text-3xl 2xl:text-4xl font-medium">
                        Episodes
                     </div>
                     <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-10">
                        {season.episodes.map((ep: any) => (
                           <EpisodeCard key={ep.id} episode={ep} />
                        ))}
                     </div>
                  </RevealHorizontal>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
