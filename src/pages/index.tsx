import { useEffect, useState } from "react";
// import NowPlayingContainer from "../components/home/nowPlaying/NowPlayingContainer";
// import OnAirContainer from "../components/home/onAir/OnAirContainer";
// import UpcomingContainer from "../components/home/upcoming/UpcomingContainer";

import usePageLoadingContext from "../context/PageLoadingContext";
// import HomeContainer from "../components/home/HomeContainer";
import HomeTitle from "../components/home/HomeTitle";
// import OnAirCard from "../components/home/onAir/OnAirCard";
// import UpcomingCard from "../components/home/upcoming/UpcomingCard";
// import NowPlaying from "../components/home/NowPlaying";

import BackgroundImage from "../components/BackgroundImage";
import ChangeShowcase from "../components/home/ChangeShowcase";
import HomeGenres from "../components/home/HomeGenres";
import NowBookmark from "../components/home/nowPlaying/nowPlayingCard/NowBookmark";
import LearnMoreButton from "../components/home/nowPlaying/nowPlayingCard/LearnMoreButton";
import HomeSlider from "../components/home/HomeSlider";

export default function Home() {
   const [nowPlaying, setNowPlaying] = useState<any[]>([]);
   const [onAir, setOnAir] = useState<any[]>([]);
   const [upcoming, setUpcoming] = useState<any[]>([]);
   const { setIsLoading } = usePageLoadingContext();

   useEffect(() => {
      const getData = async () => {
         const res = await fetch("/api/home");
         const data = await res.json();
         setNowPlaying(data[0].results);
         setOnAir(data[1].results);
         setUpcoming(data[2].results);
         setIsLoading(false);
      };
      getData();
   }, [setIsLoading]);

   const [activeIndex, setActiveIndex] = useState<number>(0);
   const [currentMedia, setCurrentMedia] = useState<any>(nowPlaying[0]);
   const [currentArray, setCurrentArray] = useState<any[]>(nowPlaying);

   useEffect(() => {
      setCurrentMedia(currentArray[activeIndex]);
   }, [activeIndex, currentArray]);

   const [currentShowcase, setCurrentShowcase] = useState<
      "movies" | "series" | "upcoming"
   >("movies");

   useEffect(() => {
      if (currentShowcase === "movies") setCurrentArray(nowPlaying);
      if (currentShowcase === "series") setCurrentArray(onAir);
      if (currentShowcase === "upcoming") setCurrentArray(upcoming);
   }, [currentShowcase, nowPlaying, onAir, upcoming]);

   if (!currentMedia) return <></>;
   return (
      <div
         style={{ height: "calc(100vh - 136px)" }}
         className="w-full flex flex-col"
      >
         <BackgroundImage currentImg={currentMedia.backdrop_path} />
         <div className="flex-1 w-full px-10 pb-10 flex flex-col justify-between">
            <ChangeShowcase
               currentShowcase={currentShowcase}
               setCurrentShowcase={setCurrentShowcase}
            />
            <div className="space-y-2 2xl:space-y-3">
               <HomeTitle>{currentMedia.title || currentMedia.name}</HomeTitle>
               <HomeGenres />
               <div className="hidden sm:flex items-center text-dark-text-hard h-10 2xl:h-14">
                  <NowBookmark movie={currentMedia} />
                  <LearnMoreButton id={currentMedia.id} onClick={() => {}} />
               </div>
            </div>
         </div>
         <HomeSlider
            displayedCards={currentArray}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
         />
      </div>
   );
}
