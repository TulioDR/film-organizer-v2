import { motion } from "framer-motion";

import MainCard from "./mainCard/MainCard";
import { staggerContainer } from "../../../animations/StaggerCards";
import useSidebarContext from "../../../context/SidebarContext";
import PageAnimationContainer from "../../../containers/PageAnimationContainer";
import PageTitle from "../../../components/PageTitle";
import TransitionPoster from "../../transitionPoster/components/TransitionPoster";
import useTransitionPoster from "../../transitionPoster/hooks/useTransitionPoster";
import useSearchCards from "../hooks/useSearchCards";
import MainCardMobile from "./mainCardMobile/MainCardMobile";

type Props = {
   title: string;
   mediaType: "tv" | "movie";
   url: string;
};

export default function SearchCards({ title, mediaType, url }: Props) {
   const { openSidebar } = useSidebarContext();
   const { media } = useSearchCards(url);
   const { selectedImg, link, position, setTransitionValues } =
      useTransitionPoster();

   return (
      <PageAnimationContainer title={title}>
         <PageTitle>{title}</PageTitle>
         <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`gap-5 grid grid-cols-2 md:grid-cols-3 ${
               openSidebar
                  ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                  : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            }`}
         >
            {media.map((media) => (
               <>
                  <div className="sm:hidden">
                     <MainCardMobile
                        key={media.id}
                        media={media}
                        mediaType={mediaType}
                     />
                  </div>
                  <div className="hidden sm:block">
                     <MainCard
                        key={media.id}
                        media={media}
                        mediaType={mediaType}
                        setTransitionValues={setTransitionValues}
                     />
                  </div>
               </>
            ))}
         </motion.div>
         <TransitionPoster
            link={link}
            position={position}
            selectedImg={selectedImg}
         />
      </PageAnimationContainer>
   );
}
