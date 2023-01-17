import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TabOptions } from "../../../models/detailsModel";

import Overview from "./overview/Overview";
import CastCrew from "./people/CastCrew";
import SeasonDetails from "./seasons/seasonDetails/SeasonDetails";
import Seasons from "./seasons/Seasons";
import Similar from "./Similar";
import TabsContainer from "./TabsContainer";
import Trailers from "./Trailers";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
};

export default function Tabs({ media, mediaType }: Props) {
   const [selectedTab, setSelectedTab] = useState<TabOptions>("overview");

   const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

   return (
      <>
         <SeasonDetails
            tvShowID={media.id}
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
         />
         <TabsContainer
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            isMovie={mediaType === "movie"}
         />
         <motion.div
            exit={{
               y: 100,
               opacity: 0,
               transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="flex-1 w-full overflow-y-hidden overflow-x-visible"
         >
            <div className="h-full w-full overflow-y-auto main-scrollbar overflow-x-visible">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={selectedTab}
                     className="w-full overflow-hidden"
                  >
                     {selectedTab === "overview" && (
                        <Overview
                           tagline={media.tagline || null}
                           overview={media.overview}
                           genres={media.genres}
                           crew={media.created_by || media.credits.crew}
                           isMovie={mediaType === "movie"}
                           productionCompanies={media.production_companies}
                           spokenLanguages={media.spoken_languages}
                           seasons={media.number_of_seasons}
                           episodes={media.number_of_episodes}
                           networks={media.networks}
                           budget={media.budget}
                           revenue={media.revenue}
                        />
                     )}
                     {selectedTab === "seasons" && (
                        <Seasons
                           seasons={media.seasons}
                           setSelectedSeason={setSelectedSeason}
                        />
                     )}
                     {selectedTab === "trailers" && (
                        <Trailers trailers={media.videos.results} />
                     )}
                     {selectedTab === "cast&crew" && (
                        <CastCrew
                           cast={media.credits?.cast}
                           crew={media.credits?.crew}
                        />
                     )}
                     {selectedTab === "similar" && (
                        <Similar
                           mediaType={mediaType}
                           similar={media.similar.results}
                        />
                     )}
                  </motion.div>
               </AnimatePresence>
            </div>
         </motion.div>
      </>
   );
}
