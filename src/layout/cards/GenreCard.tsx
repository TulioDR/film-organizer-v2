import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Poster from "../../components/Poster";
import GenreModel from "../../models/genresModel";
type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
};

const item = {
   initial: { opacity: 0, y: 100 },
   animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};

export default function GenreCard({ genre, mediaType }: Props) {
   const router = useRouter();

   return (
      <motion.article
         variants={item}
         onClick={() => {
            router.push(`/genres/${mediaType}/${genre.id}`);
         }}
         className={`aspect-video relative group overflow-hidden cursor-pointer`}
      >
         <div className="relative w-full h-full brightness-50 group-hover:brightness-100 group-hover:scale-110 ease-in-out duration-300">
            <Poster
               alt={genre.name}
               posterPath={genre.image}
               size="md"
               genres
               backPoster
            />
         </div>
         <div className="absolute z-10 top-0 left-0 w-full h-full grid place-content-center">
            <span className="text-3xl font-bold group-hover:opacity-0 duration-300">
               {genre.name}
            </span>
         </div>
      </motion.article>
   );
}
