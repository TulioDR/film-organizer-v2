import { TabOptions } from "../../../models/detailsModel";
import Tab from "./Tab";
import { motion } from "framer-motion";

type Props = {
   selectedTab: TabOptions;
   setSelectedTab: React.Dispatch<React.SetStateAction<TabOptions>>;
   isMovie: boolean;
};

const container = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.1 },
   },
   exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
};

export default function TabsContainer({
   selectedTab,
   setSelectedTab,
   isMovie,
}: Props) {
   return (
      <div className="relative pt-3">
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[1px] bg-gray-400 absolute bottom-0 left-0"
         ></motion.div>
         <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex space-x-3 justify-between overflow-x-auto w-full"
         >
            <Tab
               name="Overview"
               value="overview"
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />
            {!isMovie && (
               <Tab
                  name="Seasons"
                  value="seasons"
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
               />
            )}
            <Tab
               name="Trailers & More"
               value="trailers"
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />
            <Tab
               name="Cast & Crew"
               value="cast&crew"
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />
            <Tab
               name="Similar"
               value="similar"
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />
         </motion.div>
      </div>
   );
}
