import { motion } from "framer-motion";
import GroupTicker from "./GroupTicker";
import useHomeContext from "../../context/HomeContext";
import { HOME_TRANSITION } from "../../constants/ANIMATIONS";

type Props = {};

export default function HomeTicker({}: Props) {
   const { groupIndex, allGroups } = useHomeContext();

   return (
      <motion.div
         initial={{ x: "-100%", opacity: 0 }}
         animate={{ x: "0%", opacity: 1 }}
         exit={{ x: "-100%", opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="w-full xl:w-[410px] h-full flex-shrink-0 bg-primary-light dark:bg-primary-dark brightness-50 xl:brightness-100 pointer-events-none xl:pointer-events-auto overflow-hidden relative"
      >
         <motion.div
            animate={{ x: `-${(100 / allGroups.length) * groupIndex}%` }}
            transition={HOME_TRANSITION}
            className="h-full flex-shrink-0 flex gap-1 w-full xl:w-max"
         >
            {allGroups.map((group) => (
               <GroupTicker key={group.id} groupMedia={group.media} />
            ))}
         </motion.div>
      </motion.div>
   );
}
