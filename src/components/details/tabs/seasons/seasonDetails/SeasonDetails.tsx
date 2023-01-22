import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { staggerContainer } from "../../../../../animations/StaggerCards";
import { getSeason } from "../../../../../api/media";
import EpisodeCard from "../../../../../layout/cards/EpisodeCard/EpisodeCard";
import CloseSeasonButton from "./CloseSeasonButton";
import SeasonContainer from "./SeasonContainer";
import SeasonInfo from "./SeasonInfo";
import SeasonInnerContainer from "./SeasonInnerContainer";
import SeasonOverview from "./SeasonOverview";
import SeasonSubtitle from "./SeasonSubtitle";
import SeasonTitle from "./SeasonTitle";

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
   const [isAnimationComplete, setIsAnimationComplete] =
      useState<boolean>(false);

   const close = () => setSelectedSeason(null);

   useEffect(() => {
      if (selectedSeason === null) return;
      const getSeasonData = async () => {
         const data = await getSeason(tvShowID, selectedSeason);
         setData(data);
      };
      getSeasonData();
   }, [selectedSeason, tvShowID]);

   useEffect(() => {
      if (!isAnimationComplete) return;
      if (!data) return;
      setSeason(data);
   }, [isAnimationComplete, data]);

   const onAnimationComplete = () => {
      setIsAnimationComplete(true);
   };

   return (
      <AnimatePresence>
         {selectedSeason !== null && (
            <SeasonContainer onAnimationComplete={onAnimationComplete}>
               {season ? (
                  <SeasonInnerContainer>
                     <CloseSeasonButton onClick={close} />
                     <SeasonTitle>{season.name}</SeasonTitle>
                     <SeasonInfo season={season} />
                     <SeasonOverview overview={season.overview} />
                     <SeasonSubtitle>Episodes</SeasonSubtitle>
                     <motion.div
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-10"
                     >
                        {season.episodes.map((ep: any) => (
                           <EpisodeCard key={ep.id} episode={ep} />
                        ))}
                     </motion.div>
                  </SeasonInnerContainer>
               ) : (
                  <div className="h-full w-full flex items-center justify-center">
                     <div className="w-40 h-40 bg-blue-500">Loading...</div>
                  </div>
               )}
            </SeasonContainer>
         )}
      </AnimatePresence>
   );
}
