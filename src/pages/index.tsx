import { useEffect, useState } from "react";

import ChangeShowcase from "../components/Home/ChangeShowcase";
import HomeSlider from "../components/Home/HomeSlider";
import MediaDescription from "../components/Home/MediaDescription";
import TransitionPoster from "@/features/transitionPoster/components/TransitionPoster";
import { motion } from "framer-motion";
import API_PUBLIC from "@/api/public";
import { TransitionPosterProvider } from "@/features/transitionPoster/context/TransitionPosterContext";
import PageHead from "@/components/PageHead";
import useBackground from "@/hooks/useBackground";

export default function Home() {
   const [nowPlaying, setNowPlaying] = useState<any[]>([]);
   const [onAir, setOnAir] = useState<any[]>([]);
   const [upcoming, setUpcoming] = useState<any[]>([]);

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
   const [currentMedia, setCurrentMedia] = useState<any>(nowPlaying[0]);
   const [currentArray, setCurrentArray] = useState<any[]>(nowPlaying);

   const { changeBackground } = useBackground();
   useEffect(() => {
      const current = currentArray[activeIndex];
      if (!current) return;
      setCurrentMedia(current);
   }, [activeIndex, currentArray, changeBackground, currentMedia]);

   useEffect(() => {
      changeBackground(currentMedia);
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
            style={{ height: "calc(100vh - 96px)" }}
            className="w-full overflow-hidden pb-10 text-white"
         >
            {!currentMedia ? (
               <div className="fixed top-0 left-0 h-screen -z-10 w-full"></div>
            ) : (
               <div className="h-full flex flex-col items-stretch">
                  <div className="flex-1 w-full px-10 pb-10 flex flex-col justify-between">
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
         <TransitionPoster />
      </TransitionPosterProvider>
   );
}
