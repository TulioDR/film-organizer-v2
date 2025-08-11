import React from "react";
import { motion } from "framer-motion";
import Poster from "@/common/components/Poster";

type Props = {
   season: any;
};

export default function SeasonPoster({ season }: Props) {
   return (
      <motion.div
         layoutId={`https://image.tmdb.org/t/p/w${780}${season.poster_path}`}
         className="h-full aspect-[2/3] w-1/3 flex-shrink-0"
      >
         <Poster alt={season.name} posterPath={season.poster_path} front />
      </motion.div>
   );
}
