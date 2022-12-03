import Poster from "../../../Poster";
import { motion } from "framer-motion";

type Props = { person: any };

export default function Person({ person }: Props) {
   return (
      <motion.div className="cursor-pointer relative rounded-xl overflow-hidden">
         <Poster
            alt={person.name}
            posterPath={person.profile_path}
            size="md"
            person
         />
         <div className="w-full absolute bottom-0 text-sm p-2 pt-10 bg-gradient-to-t from-black to-transparent">
            <div className="truncate">{person.name}</div>
            <div className="truncate">{person.character || person.job}</div>
         </div>
      </motion.div>
   );
}
