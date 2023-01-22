import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { staggerContainer } from "../../../../../animations/StaggerCards";
import { getSeason } from "../../../../../api/media";
import CloseSeasonButton from "./CloseSeasonButton";
import EpisodeCard from "./episodecard/EpisodeCard";
import SeasonContainer from "./SeasonContainer";
import SeasonInfo from "./SeasonInfo";
import SeasonInnerContainer from "./SeasonInnerContainer";
import SeasonLoadingAnimation from "./SeasonLoadingAnimation";
import SeasonOverview from "./SeasonOverview";
import SeasonSubtitle from "./SeasonSubtitle";
import SeasonTitle from "./SeasonTitle";

type Props = {
   tvShowID: number;
   selectedSeason: number;
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
   const onAnimationComplete = () => setIsAnimationComplete(true);

   useEffect(() => {
      const getSeasonData = async () => {
         const seasonData = await getSeason(tvShowID, selectedSeason);
         setData(seasonData);
      };
      getSeasonData();
   }, [selectedSeason, tvShowID]);

   useEffect(() => {
      if (!isAnimationComplete) return;
      if (!data) return;
      setSeason(data);
   }, [isAnimationComplete, data]);

   return (
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
            <SeasonLoadingAnimation />
         )}
      </SeasonContainer>
   );
}
