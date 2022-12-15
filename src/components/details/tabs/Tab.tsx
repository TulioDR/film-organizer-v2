import { motion } from "framer-motion";
import useThemeContext from "../../../context/ThemeContext";
import { TabOptions } from "../../../models/detailsModel";

type Props = {
   name: string;
   value: TabOptions;
   selectedTab: TabOptions;
   setSelectedTab: React.Dispatch<React.SetStateAction<TabOptions>>;
};

const item = {
   initial: { opacity: 0, y: "100%" },
   animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {
      y: "100%",
      opacity: 0,
   },
};

export default function Tab({
   name,
   value,
   selectedTab,
   setSelectedTab,
}: Props) {
   const { themeColor } = useThemeContext();
   const setTab = () => {
      setSelectedTab(value);
   };
   return (
      <div
         onClick={setTab}
         className="uppercase flex-shrink-0 relative cursor-pointer pb-2"
      >
         <div className="overflow-hidden">
            <motion.div
               variants={item}
               className={`font-medium ${
                  value === selectedTab
                     ? "text-light-text-hard dark:text-dark-text-hard"
                     : ""
               }`}
            >
               {name}
            </motion.div>
         </div>
         {value === selectedTab && (
            <motion.div
               layoutId="underline"
               style={{ backgroundColor: themeColor }}
               className="w-full absolute bottom-0 h-1"
            />
         )}
      </div>
   );
}
