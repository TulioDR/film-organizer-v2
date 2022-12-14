import { motion } from "framer-motion";
import SeasonCard from "../../../../layout/cards/SeasonCard";

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
};

type Props = {
   seasons: any[];
   setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>;
   setSelectedSeason: React.Dispatch<React.SetStateAction<number | null>>;
};
export default function Seasons({
   seasons,
   setSelectedImg,
   setSelectedSeason,
}: Props) {
   const openSeasonInfo = (season: any) => {
      if (window.innerWidth >= 1280) {
         setSelectedImg(
            `https://image.tmdb.org/t/p/w${780}${season.poster_path}`
         );
      }
      setSelectedSeason(season.season_number);
   };

   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className="main-scrollbar grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-4 pt-5 pr-4 overflow-y-auto h-full"
      >
         {seasons.map((season) => (
            <SeasonCard
               key={season.id}
               season={season}
               openSeasonInfo={openSeasonInfo}
            />
         ))}
      </motion.div>
   );
}
