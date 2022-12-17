import Poster from "../../Poster";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import {
   staggerContainer,
   staggerItem,
} from "../../../animations/StaggerCards";

type Props = {
   similar: any[];
   mediaType: "tv" | "movie";
};

export default function Similar({ similar, mediaType }: Props) {
   const router = useRouter();
   const goToSimilar = (id: number) => {
      router.push(`/${mediaType}/${id}`);
   };
   return (
      <motion.div
         variants={staggerContainer}
         initial="initial"
         animate="animate"
         exit="exit"
         className="w-full grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 pt-3 pr-3"
      >
         {similar.map((sim) => (
            <motion.article
               onClick={() => goToSimilar(sim.id)}
               variants={staggerItem}
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
