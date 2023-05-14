import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import GenreModel from "../../models/genresModel";
type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
   setCurrentGenre: React.Dispatch<any>;
};

// const item = {
//    initial: { opacity: 0, y: 100 },
//    animate: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.4, ease: "easeInOut" },
//    },
//    exit: {},
// };

export default function GenreCard({
   genre,
   mediaType,
   setCurrentGenre,
}: Props) {
   const router = useRouter();

   return (
      <motion.article
         onClick={() => {
            router.push(`/genres/${mediaType}/${genre.id}`);
         }}
         onHoverStart={() => setCurrentGenre(genre)}
         onHoverEnd={() => setCurrentGenre(null)}
         className={`h-[400px] 2xl:h-[600px] flex-1 hover:flex-[5] duration-500 relative group overflow-hidden cursor-pointer`}
      >
         <div className="relative w-full h-full brightness-50 group-hover:brightness-100 ease-in-out duration-300">
            <Image
               alt={genre.name}
               src={genre.image}
               fill
               sizes="100%"
               priority
               className="object-cover"
            />
         </div>
         <div className="absolute z-10 top-0 left-0 w-full h-full grid place-content-center">
            <span className="text-lg group-hover:opacity-0 duration-300 text-white text-center w-min">
               {genre.name}
            </span>
         </div>
      </motion.article>
   );
}
