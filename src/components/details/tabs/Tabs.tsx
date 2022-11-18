import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TabOptions } from "../../../models/detailsModel";

import Overview from "./overview/Overview";
import CastCrew from "./people/CastCrew";
import Similar from "./Similar";
import TabsContainer from "./TabsContainer";
import Trailers from "./Trailers";

type Props = { media: any; mediaType: string };

export default function Tabs({ media, mediaType }: Props) {
   const [selectedTab, setSelectedTab] = useState<TabOptions>("overview");
   return (
      <>
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
            className="flex-1 overflow-hidden w-full"
         >
            <AnimatePresence mode="wait">
               <motion.div
                  key={selectedTab}
                  className="flex-1 overflow-hidden w-full"
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
                     <div className="flex-1 w-full"></div>
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
                     <Similar similar={media.similar.results} />
                  )}
               </motion.div>
            </AnimatePresence>
         </motion.div>
      </>
   );
}
