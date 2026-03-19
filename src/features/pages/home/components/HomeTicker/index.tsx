import React from "react";
import { motion } from "framer-motion";
import GroupTicker from "./GroupTicker";
import useHomeContext from "../../context/HomeContext";
import { HOME_TRANSITION } from "../../constants/ANIMATIONS";

type Props = {};

export default function HomeTicker({}: Props) {
   const { mediaGroup, allGroups } = useHomeContext();

   const currentIndex = allGroups.findIndex((g) => g.id === mediaGroup.id);

   return (
      <div className="w-full xl:w-[410px] h-full flex-shrink-0 bg-primary-light dark:bg-primary-dark brightness-50 xl:brightness-100 pointer-events-none xl:pointer-events-auto overflow-hidden relative">
         <motion.div
            animate={{ x: `-${(100 / allGroups.length) * currentIndex}%` }}
            transition={HOME_TRANSITION}
            className="h-full flex-shrink-0 flex gap-1 w-full xl:w-max"
         >
            {allGroups.map((group) => (
               <GroupTicker key={group.id} groupMedia={group.media} />
            ))}
         </motion.div>
      </div>
   );
}
