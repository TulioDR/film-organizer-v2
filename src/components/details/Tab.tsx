import { TabOptions } from "../../models/detailsModel";
import { motion } from "framer-motion";

type Props = {
   name: string;
   value: TabOptions;
   selectedTab: TabOptions;
   setSelectedTab: React.Dispatch<React.SetStateAction<TabOptions>>;
};

export default function Tab({
   name,
   value,
   selectedTab,
   setSelectedTab,
}: Props) {
   const setTab = () => {
      setSelectedTab(value);
   };

   return (
      <div
         onClick={setTab}
         className="uppercase flex-shrink-0 relative cursor-pointer pb-2"
      >
         {name}
         {value === selectedTab && (
            <motion.div
               layoutId="underline"
               className="w-full bg-blue-400 dark:bg-blue-600 absolute bottom-0 h-1"
            />
         )}
      </div>
   );
}
