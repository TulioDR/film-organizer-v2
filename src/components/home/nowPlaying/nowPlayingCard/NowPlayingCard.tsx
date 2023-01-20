import usePosterAnimationContext from "../../../../context/PosterAnimationContext";
import Poster from "../../../Poster";
import { motion } from "framer-motion";
import { homeCard } from "../../../../animations/homeAnimations";
import LearnMoreButton from "./LearnMoreButton";
import NowBookmark from "./NowBookmark";
import NowInfoContainer from "./NowInfoContainer";

type Props = {
   movie: any;
};

const changeDateFormat = (date: string) => {
   return new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "utc",
   });
};

export default function NowPlayingCard({ movie }: Props) {
   const { changeAnimatePoster } = usePosterAnimationContext();

   const handleLearnMoreClick = () => {
      changeAnimatePoster(true);
   };

   return (
      <motion.div
         variants={homeCard}
         className="rounded-2xl aspect-video w-full overflow-hidden shadow-md relative"
      >
         <Poster
            alt={movie.title}
            posterPath={movie.backdrop_path}
            size="xl"
            backPoster
         />
         <NowInfoContainer>
            <div className="text-3xl xl:text-4xl font-bold text-dark-text-hard">
               {movie.title}
            </div>
            <div className="text-sm text-dark-text-normal">
               {changeDateFormat(movie.release_date)}
            </div>
            <div className="flex items-center space-x-4 text-dark-text-hard">
               <NowBookmark movie={movie} />
               <LearnMoreButton id={movie.id} onClick={handleLearnMoreClick} />
            </div>
         </NowInfoContainer>
      </motion.div>
   );
}
