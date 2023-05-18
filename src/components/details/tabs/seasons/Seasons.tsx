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
   // setSelectedSeason: React.Dispatch<React.SetStateAction<number | null>>;
};
export default function Seasons({ seasons }: Props) {
   const openSeasonInfo = (season: any) => {
      // setSelectedSeason(season.season_number);
   };

   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-5"
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
