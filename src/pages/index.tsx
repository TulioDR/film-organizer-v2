import API_PUBLIC from "@/api/public";

import PageHead from "@/common/components/PageHead";

import { motion } from "framer-motion";
import HomeMediaHandler from "@/features/pages/home/components/HomeMediaHandler";
import ChangeMediaGroup from "@/features/pages/home/components/ChangeMediaGroup";
import HomeTicker from "@/features/pages/home/components/HomeTicker";
import MediaGroup from "@/features/pages/home/models/MediaGroup";
import HomeTitle from "@/features/pages/home/components/HomeTitle";
import { HomeProvider } from "@/features/pages/home/context/HomeContext";
import HomeAutoPlay from "@/features/pages/home/components/HomeAutoPlay";
import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import Mobile from "@/features/pages/home/components/Mobile";
import NavigationButton from "@/features/pages/home/components/HomeMediaHandler/NavigationButton";
import HomeBanner from "@/features/pages/home/components/HomeBanner";

export const getServerSideProps = async () => {
   const { data } = await API_PUBLIC.get("/home");
   return { props: { data } };
};

interface Props {
   data: [MediaGroup, MediaGroup, MediaGroup];
}

export default function Home({ data: allGroups }: Props) {
   return (
      <HomeProvider allGroups={allGroups}>
         <PageHead title="Film Organizer" />
         <Responsive maxWidth={XL_MEDIA_QUERY}>
            <Mobile />
         </Responsive>
         <Responsive minWidth={XL_MEDIA_QUERY}>
            <motion.div className="fixed inset-0 flex overflow-hidden pl-4 lg:pl-24 xl:pl-32 pt-20">
               <HomeTicker />
               <div className="h-full flex-1 flex flex-col gap-4 pl-4 pb-4">
                  <HomeBanner />
                  <motion.div
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.9, opacity: 0 }}
                     transition={{ duration: 0.4 }}
                     className="w-full flex-1 pr-32 flex flex-col justify-between gap-4"
                  >
                     <div className="flex w-full justify-between h-16">
                        <HomeAutoPlay />
                        <div className="h-full flex gap-4">
                           <NavigationButton icon="chevron_backward" />
                           <NavigationButton icon="chevron_forward" next />
                        </div>
                     </div>
                     <div className="w-full flex items-center justify-center gap-8 2xl:gap-32">
                        <HomeTitle />
                        <HomeMediaHandler />
                     </div>
                     <ChangeMediaGroup />
                  </motion.div>
               </div>
            </motion.div>
         </Responsive>
      </HomeProvider>
   );
}
