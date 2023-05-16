import { motion } from "framer-motion";
import Image from "next/image";
import GenreModel from "../../models/genresModel";
import Link from "next/link";
type Props = {
   genre: GenreModel;
   mediaType: "tv" | "movie";
   setCurrentGenre: React.Dispatch<any>;
};

const item = {
   initial: {
      height: 0,
   },
   animate: {
      height: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
   },
   exit: {
      height: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
   },
};

export default function GenreCard({
   genre,
   mediaType,
   setCurrentGenre,
}: Props) {
   return (
      <Link
         href={`/genres/${mediaType}/${genre.id}`}
         className={`h-[400px] 2xl:h-[600px] flex-1 hover:flex-[5] duration-500 relative group cursor-pointer`}
      >
         <motion.div
            variants={item}
            onHoverStart={() => setCurrentGenre(genre)}
            onHoverEnd={() => setCurrentGenre(null)}
            className="w-full overflow-hidden"
         >
            <div className="h-[400px] 2xl:h-[600px] relative">
               <Image
                  alt={genre.name}
                  src={genre.image}
                  fill
                  sizes="100%"
                  priority
                  className="object-cover brightness-50 group-hover:brightness-100 ease-in-out duration-300"
               />
               <div className="absolute z-10 top-0 left-0 w-full h-full grid place-content-center">
                  <span className="text-lg group-hover:opacity-0 duration-300 text-white text-center w-min">
                     {genre.name}
                  </span>
               </div>
            </div>
         </motion.div>
      </Link>
   );
}
