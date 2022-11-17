import { TabOptions } from "../../models/detailsModel";
import Tab from "./Tab";

type Props = {
   selectedTab: TabOptions;
   setSelectedTab: React.Dispatch<React.SetStateAction<TabOptions>>;
   isMovie: boolean;
};

export default function TabsContainer({
   selectedTab,
   setSelectedTab,
   isMovie,
}: Props) {
   return (
      <div className="flex space-x-2 justify-between overflow-x-auto w-full border-b-gray-500 border-b">
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
      </div>
   );
}
