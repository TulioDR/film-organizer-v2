import { useEffect, useState } from "react";

import API_PUBLIC from "@/api/public";

import PageHead from "@/common/components/PageHead";
import { Media } from "@/common/models/Media";

import { motion } from "framer-motion";
import Banner from "@/common/components/Banner";
import HomeMediaHandler from "@/features/pages/home/components/HomeMediaHandler";
import ChangeMediaGroup from "@/features/pages/home/components/ChangeMediaGroup";
import HomeTicker from "@/features/pages/home/components/HomeTicker";
import MediaGroup from "@/features/pages/home/models/MediaGroup";
import HomeTitle from "@/features/pages/home/components/HomeTitle";

export const getServerSideProps = async () => {
   const { data } = await API_PUBLIC.get("/home");

   return {
      props: { data },
   };
};

interface Props {
   data: [MediaGroup, MediaGroup, MediaGroup];
}

export default function Home({ data: allGroups }: Props) {
   const [isForward, setIsForward] = useState(true);

   const [mediaGroup, setMediaGroup] = useState<MediaGroup>(allGroups[0]);
   const [media, setMedia] = useState<Media>(mediaGroup.media[0]);

   const changeMediaGroup = (newMediagroup: MediaGroup) => {
      const prevIdx = allGroups.findIndex((g) => g.id === mediaGroup.id);
      const nextIdx = allGroups.findIndex((g) => g.id === newMediagroup.id);

      if (nextIdx !== prevIdx) setIsForward(nextIdx > prevIdx);

      setTimeout(() => {
         setMediaGroup(newMediagroup);
      }, 10);
   };

   const changeSelectedMedia = (newMedia: Media) => {
      const prevIdx = mediaGroup.media.findIndex((m) => m.id === media.id);
      const nextIdx = mediaGroup.media.findIndex((m) => m.id === newMedia.id);

      if (nextIdx !== prevIdx) setIsForward(nextIdx > prevIdx);

      setTimeout(() => {
         setMedia(newMedia);
      }, 10);
   };

   useEffect(() => {
      setMedia(mediaGroup.media[0]);
   }, [mediaGroup]);

   return (
      <>
         <PageHead title="Film Organizer" />
         <motion.div className="fixed inset-0 flex overflow-hidden pl-4 lg:pl-24 xl:pl-32 pt-20">
            <HomeTicker
               media={media}
               mediaGroup={mediaGroup}
               allGroups={allGroups}
               changeSelectedMedia={changeSelectedMedia}
            />
            <div className="h-full flex-1 flex flex-col gap-4 pl-4 pb-4">
               <Banner backPath={media.backdrop_path} isForward={isForward} />
               <div className="w-full flex-1 pr-32 flex flex-col justify-between">
                  <div className="w-full flex items-start gap-8 2xl:gap-32">
                     <HomeTitle title={media.title || media.name} />
                     <HomeMediaHandler
                        media={media}
                        mediaGroup={mediaGroup}
                        changeSelectedMedia={changeSelectedMedia}
                        frontPath={media.poster_path}
                        isForward={isForward}
                     />
                  </div>
                  <ChangeMediaGroup
                     mediaGroup={mediaGroup}
                     changeMediaGroup={changeMediaGroup}
                     data={allGroups}
                  />
               </div>
            </div>
         </motion.div>
      </>
   );
}
