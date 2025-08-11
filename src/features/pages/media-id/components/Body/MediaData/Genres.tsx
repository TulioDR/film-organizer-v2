import { useRouter } from "next/router";
import { motion } from "framer-motion";

type Props = {
   genres: any[];
   isMovie: boolean;
};

export default function Genres({ genres, isMovie }: Props) {
   const router = useRouter();
   const goToGenre = (id: number): void => {
      router.push(`/genres/${isMovie ? "movie" : "tv"}/${id}`);
   };
   return (
      <>
         {genres.map((genre) => (
            <motion.span
               key={genre.id}
               onClick={() => goToGenre(genre.id)}
               className="text-xs sm:text-sm rounded-md px-2 h-8 flex items-center cursor-pointer mr-2 float-left mb-2 bg-white text-black  hover:bg-black hover:text-white shadow-md"
            >
               {genre.name}
            </motion.span>
         ))}
      </>
   );
}
