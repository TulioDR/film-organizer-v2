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
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 1 }}
               onClick={() => goToGenre(genre.id)}
               className="text-black text-xs sm:text-sm rounded-md px-2 py-1 cursor-pointer mr-2 float-left my-1 bg-white shadow-lg"
            >
               {genre.name}
            </motion.span>
         ))}
      </>
   );
}
