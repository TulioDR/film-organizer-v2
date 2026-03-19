import API_PUBLIC from "@/api/public";

import PageHead from "@/common/components/PageHead";

import { motion } from "framer-motion";
import Banner from "@/common/components/Banner";
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
                  <Banner />
                  <div className="w-full flex-1 pr-32 flex flex-col justify-between">
                     <div className="w-full flex items-start gap-8 2xl:gap-32">
                        <div className="flex flex-col h-full flex-1">
                           <HomeAutoPlay />
                           <HomeTitle />
                        </div>
                        <HomeMediaHandler />
                     </div>
                     <ChangeMediaGroup />
                  </div>
               </div>
            </motion.div>
         </Responsive>
      </HomeProvider>
   );
}
