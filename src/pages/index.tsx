import { useEffect, useState } from "react";

import ChangeShowcase from "../components/Home/ChangeShowcase";
import HomeSlider from "../components/Home/HomeSlider";
import MediaDescription from "../components/Home/MediaDescription";
import { useDispatch } from "react-redux";
import { backgroundActions } from "@/store/slices/background-slice";
import useTransitionPoster from "@/features/transitionPoster/hooks/useTransitionPoster";
import TransitionPoster from "@/features/transitionPoster/components/TransitionPoster";
import { posterAnimationActions } from "@/store/slices/poster-animation-slice";
import { motion } from "framer-motion";
import API_PUBLIC from "@/api/public";

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

   const dispatch = useDispatch();
   useEffect(() => {
      const current = currentArray[activeIndex];
      if (!current) return;
      const background = {
         backgroundImage: current.backdrop_path,
         backgroundKey: current.id,
      };
      dispatch(backgroundActions.setBackground(background));
      setCurrentMedia(current);
   }, [activeIndex, currentArray, dispatch]);

   const [currentShowcase, setCurrentShowcase] = useState<
      "movies" | "series" | "upcoming"
   >("movies");

   useEffect(() => {
      setActiveIndex(0);
      if (currentShowcase === "movies") setCurrentArray(nowPlaying);
      if (currentShowcase === "series") setCurrentArray(onAir);
      if (currentShowcase === "upcoming") setCurrentArray(upcoming);
   }, [currentShowcase, nowPlaying, onAir, upcoming]);

   const {
      selectedImg,
      position,
      setTransitionValues,
      closePoster,
      showSpinner,
      onPosterAnimationComplete,
      isPageHidden,
      hidePage,
   } = useTransitionPoster();

   const [currentElement, setCurrentElement] = useState<HTMLElement | null>(
      null
   );

   useEffect(() => {
      const elements = document.getElementsByClassName("home-card");
      console.log(elements[activeIndex]);
      setCurrentElement(elements[activeIndex] as HTMLElement);
   }, [activeIndex]);

   const handleLearnMoreClick = async () => {
      const { id, poster_path } = currentMedia;
      const link = `/movie/${id}`;
      dispatch(posterAnimationActions.changePosterAnimation(false));
      setTransitionValues(poster_path, link, currentElement!);
      hidePage();
   };

   return (
      <motion.div
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         style={{ height: "calc(100vh - 96px)" }}
         className="w-full overflow-hidden pb-10 text-white"
      >
         {!currentMedia ? (
            <div className="fixed top-0 left-0 h-screen -z-10 w-full"></div>
         ) : (
            <div
               className={`h-full flex flex-col items-stretch ${
                  isPageHidden ? "opacity-0 duration-300" : ""
               }`}
            >
               <div className="flex-1 w-full px-10 pb-10 flex flex-col justify-between">
                  <ChangeShowcase
                     currentShowcase={currentShowcase}
                     setCurrentShowcase={setCurrentShowcase}
                  />
                  <MediaDescription
                     currentMedia={currentMedia}
                     currentShowcase={currentShowcase}
                     handleLearnMoreClick={handleLearnMoreClick}
                  />
               </div>
               <HomeSlider
                  currentShowcase={currentShowcase}
                  displayedCards={currentArray}
                  setActiveIndex={setActiveIndex}
                  activeIndex={activeIndex}
                  isPageHidden={isPageHidden}
               />
            </div>
         )}
         <TransitionPoster
            position={position}
            selectedImg={selectedImg}
            closePoster={closePoster}
            onAnimationComplete={onPosterAnimationComplete}
            showSpinner={showSpinner}
         />
      </motion.div>
   );
}
