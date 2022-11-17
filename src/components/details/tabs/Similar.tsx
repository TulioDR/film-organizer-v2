import Poster from "../../Poster";
import { motion } from "framer-motion";

type Props = {
   similar: any[];
};

const container = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
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

export default function Similar({ similar }: Props) {
   return (
      <motion.div
         variants={container}
         initial="initial"
         animate="animate"
         exit="exit"
         className="h-full w-full overflow-y-scroll grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 pt-3 pr-3"
      >
         {similar.map((sim) => (
            <motion.article
               variants={item}
               key={sim.id}
               className="cursor-pointer"
            >
               <Poster
                  alt={sim.title || sim.name}
                  posterPath={sim.poster_path}
                  size="md"
               />
            </motion.article>
         ))}
      </motion.div>
   );
}
