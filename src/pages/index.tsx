import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import API_PUBLIC from "@/api/public";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";
import PageHead from "@/components/PageHead";

import { MediaModel } from "@/models/MediaModel";
import ChangeShowcase from "@/features/pages/home/ChangeShowcase";
import MediaDescription from "@/features/pages/home/MediaDescription";
import HomeSlider from "@/features/pages/home/HomeSlider";
import useBackground from "@/features/layout/background/hooks/useBackground";

export default function Home() {
   const [nowPlaying, setNowPlaying] = useState<MediaModel[]>([]);
   const [onAir, setOnAir] = useState<MediaModel[]>([]);
   const [upcoming, setUpcoming] = useState<MediaModel[]>([]);

   useEffect(() => {
      const getData = async () => {
         const { data } = await API_PUBLIC.get("/home");
         setNowPlaying(data[0].results);
         setOnAir(data[1].results);
         setUpcoming(data[2].results);
      };
      getData();
   }, []);

   const [activeIndex, setActiveIndex] = useState<number>(0);
   const [currentMedia, setCurrentMedia] = useState<MediaModel>(nowPlaying[0]);
   const [currentArray, setCurrentArray] = useState<MediaModel[]>(nowPlaying);

   const { changeBackground } = useBackground();
   useEffect(() => {
      const current = currentArray[activeIndex];
      if (!current) return;
      setCurrentMedia(current);
   }, [activeIndex, currentArray, currentMedia]);

   useEffect(() => {
      if (!currentMedia) return;
      changeBackground(currentMedia.id, currentMedia.poster_path);
   }, [currentMedia, changeBackground]);

   const [currentShowcase, setCurrentShowcase] = useState<
      "movies" | "series" | "upcoming"
   >("movies");

   useEffect(() => {
      setActiveIndex(0);
      if (currentShowcase === "movies") setCurrentArray(nowPlaying);
      if (currentShowcase === "series") setCurrentArray(onAir);
      if (currentShowcase === "upcoming") setCurrentArray(upcoming);
   }, [currentShowcase, nowPlaying, onAir, upcoming]);

   return (
      <TransitionPosterProvider>
         <PageHead title="Film Organizer" />
         <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full text-white h-[calc(100vh-160px)]"
         >
            {!currentMedia ? (
               <div className="fixed top-0 left-0 h-screen -z-10 w-full"></div>
            ) : (
               <div className="h-full flex flex-col items-stretch -mx-10 overflow-hidden">
                  <div className="flex-1 w-full pb-10 flex flex-col justify-between px-10">
                     <ChangeShowcase
                        currentShowcase={currentShowcase}
                        setCurrentShowcase={setCurrentShowcase}
                     />
                     <MediaDescription
                        currentMedia={currentMedia}
                        currentShowcase={currentShowcase}
                     />
                  </div>
                  <HomeSlider
                     currentShowcase={currentShowcase}
                     displayedCards={currentArray}
                     setActiveIndex={setActiveIndex}
                     activeIndex={activeIndex}
                  />
               </div>
            )}
         </motion.div>
      </TransitionPosterProvider>
   );
}
