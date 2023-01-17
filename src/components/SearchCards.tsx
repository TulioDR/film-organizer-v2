import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MainCard from "../layout/cards/MainCard";
import { staggerContainer } from "../animations/StaggerCards";
import usePageLoadingContext from "../context/PageLoadingContext";
import useSidebarContext from "../context/SidebarContext";
import PageAnimationContainer from "../containers/PageAnimationContainer";
import PageTitle from "./PageTitle";
import TransitionPoster from "../animations/TransitionPoster";
import useTransitionPoster from "../hooks/useTransitionPoster";

type Props = {
   title: string;
   mediaType: "tv" | "movie";
   url: string;
};

export default function SearchCards({ title, mediaType, url }: Props) {
   const { openSidebar } = useSidebarContext();
   const [media, setMedia] = useState<any[]>([]);
   const [page, setPage] = useState<number>(1);
   const { setIsLoading } = usePageLoadingContext();

   useEffect(() => {
      const getData = async () => {
         console.log("fetch is running");
         const res = await fetch(`${url}/${page}`);
         const data = await res.json();
         if (page === 1) {
            setMedia(data.results);
         } else {
            setMedia((oldArray) => oldArray.concat(data.results));
         }
         setIsLoading(false);
      };
      getData();
   }, [url, setIsLoading, page]);

   useEffect(() => {
      const container = document.getElementById("scroll-container")!;
      const handleScroll = () => {
         const { scrollHeight, scrollTop, clientHeight } = container;
         const bottom = scrollHeight - scrollTop === clientHeight;
         if (bottom) {
            if (page >= 4) return;
            setPage((page) => page + 1);
         }
      };
      container.addEventListener("scroll", handleScroll, { passive: true });
      return () => container.removeEventListener("scroll", handleScroll);
   });

   const { selectedImg, link, position, setTransitionValues } =
      useTransitionPoster();

   return (
      <div className="relative">
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
                  <MainCard
                     key={media.id}
                     media={media}
                     mediaType={mediaType}
                     setTransitionValues={setTransitionValues}
                  />
               ))}
            </motion.div>
            <TransitionPoster
               link={link}
               position={position}
               selectedImg={selectedImg}
            />
         </PageAnimationContainer>
      </div>
   );
}
