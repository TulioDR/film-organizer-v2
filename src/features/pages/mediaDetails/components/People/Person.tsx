import Poster from "@/components/Poster";
import personWiki from "@/utils/personWiki";
import { motion } from "framer-motion";

type Props = { person: any };

export default function Person({ person }: Props) {
   return (
      <motion.div
         onClick={() => personWiki(person.name)}
         className="cursor-pointer flex flex-col gap-2"
      >
         <div className="aspect-[2/3] rounded-xl overflow-hidden">
            <Poster
               alt={person.name}
               posterPath={person.profile_path}
               size="md"
               person
            />
         </div>
         <div className="w-full text-xs lg:text-sm flex flex-col truncate text-white">
            <div className="">{person.name}</div>
            <div className="italic">{person.character || person.job}</div>
         </div>
      </motion.div>
   );
}
