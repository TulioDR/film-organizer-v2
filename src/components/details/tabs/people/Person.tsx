import Poster from "../../../Poster";
import { motion } from "framer-motion";

type Props = { person: any };

const item = {
   initial: { opacity: 0, x: 200 },
   animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};

export default function Person({ person }: Props) {
   return (
      <motion.div
         variants={item}
         className="cursor-pointer relative rounded-xl overflow-hidden"
      >
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
