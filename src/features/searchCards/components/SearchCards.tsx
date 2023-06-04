import { motion } from "framer-motion";
import MainCard from "./mainCard/MainCard";
import { staggerContainer } from "../../../animations/StaggerCards";
import PageAnimationContainer from "../../../containers/PageAnimationContainer";
import PageTitle from "../../../components/PageTitle";
import TransitionPoster from "../../transitionPoster/components/TransitionPoster";
import useTransitionPoster from "../../transitionPoster/hooks/useTransitionPoster";
import useSearchCards from "../hooks/useSearchCards";
import MainCardMobile from "./mainCardMobile/MainCardMobile";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

type Props = {
   title: string;
   mediaType: "tv" | "movie";
   url: string;
};

export default function SearchCards({ title, mediaType, url }: Props) {
   const { expandSidebar } = useSelector((state: any) => state.sidebar);

   const [showLoadingAnimation, setShowLoadingAnimation] =
      useState<boolean>(true);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [showPage, setShowPage] = useState<boolean>(false);

   const { media } = useSearchCards(url, setIsLoading);
   const { selectedImg, link, position, setTransitionValues } =
      useTransitionPoster();

   return (
      <PageAnimationContainer
         title={title}
         showPage={showPage}
         setShowPage={setShowPage}
         isLoading={isLoading}
         showLoadingAnimation={showLoadingAnimation}
         setShowLoadingAnimation={setShowLoadingAnimation}
      >
         <div className="px-10">
            <PageTitle>{title}</PageTitle>
            <motion.div
               variants={staggerContainer}
               initial="initial"
               animate="animate"
               exit="exit"
               className={`gap-5 grid grid-cols-2 md:grid-cols-3 ${
                  expandSidebar
                     ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                     : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
               }`}
            >
               {media.map((media) => (
                  <Fragment key={media.id}>
                     <div className="sm:hidden">
                        <MainCardMobile media={media} mediaType={mediaType} />
                     </div>
                     <div className="hidden sm:block">
                        <MainCard
                           media={media}
                           mediaType={mediaType}
                           setTransitionValues={setTransitionValues}
                        />
                     </div>
                  </Fragment>
               ))}
            </motion.div>
         </div>
         <TransitionPoster
            link={link}
            position={position}
            selectedImg={selectedImg}
         />
      </PageAnimationContainer>
   );
}
