import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MainCard from "../layout/cards/MainCard";
import { staggerContainer } from "../animations/StaggerCards";
import usePageLoadingContext from "../context/PageLoadingContext";
import useSidebarContext from "../context/SidebarContext";
import TransitionPoster from "../animations/TransitionPoster";
import PageAnimationContainer from "../containers/PageAnimationContainer";
import PageTitle from "./PageTitle";

type Props = {
   title: string;
   mediaType: "tv" | "movie";
   url: string;
};

export default function SearchCards({ title, mediaType, url }: Props) {
   const [selectedImg, setSelectedImg] = useState<string | null>(null);

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

   return (
      <PageAnimationContainer title={title}>
         <PageTitle>{title}</PageTitle>
         <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`grid grid-cols-2 md:grid-cols-3 ${
               openSidebar
                  ? "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                  : "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            }  gap-5 overflow-hidden`}
         >
            {media.map((media) => (
               <MainCard
                  key={media.id}
                  media={media}
                  mediaType={mediaType}
                  setSelectedImg={setSelectedImg}
               />
            ))}
         </motion.div>
         <TransitionPoster
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
         />
      </PageAnimationContainer>
   );
}