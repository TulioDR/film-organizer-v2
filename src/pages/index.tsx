import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import NowPlayingContainer from "../components/home/nowPlaying/NowPlayingContainer";
import OnAirContainer from "../components/home/onAir/OnAirContainer";
import UpcomingContainer from "../components/home/upcoming/UpcomingContainer";

import usePageLoadingContext from "../context/PageLoadingContext";
import PageAnimationContainer from "../containers/PageAnimationContainer";
import NavigationButtons from "../components/home/NavigationButtons";
import NowPlayingCard from "../components/home/nowPlaying/nowPlayingCard/NowPlayingCard";
import HomeContainer from "../components/home/HomeContainer";
import HomeTitle from "../components/home/HomeTitle";
import OnAirCard from "../components/home/onAir/OnAirCard";
import UpcomingCard from "../components/home/upcoming/UpcomingCard";

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

   return (
      <PageAnimationContainer title="Film Organizer">
         {/* <HomeContainer>
            <div>
               <div className="flex justify-between items-center">
                  <HomeTitle>Now playing on Theaters</HomeTitle>
                  <NavigationButtons prevId="prev-now" nextId="next-now" />
               </div>
               <NowPlayingContainer>
                  {nowPlaying.map((movie) => (
                     <SwiperSlide key={movie.id}>
                        <NowPlayingCard movie={movie} />
                     </SwiperSlide>
                  ))}
               </NowPlayingContainer>
            </div>
            <div>
               <div className="flex justify-between items-center">
                  <HomeTitle>TV Series on Air</HomeTitle>
                  <NavigationButtons prevId="prev-air" nextId="next-air" />
               </div>
               <OnAirContainer>
                  {onAir.map((tv) => (
                     <SwiperSlide key={tv.id}>
                        <OnAirCard tv={tv} />
                     </SwiperSlide>
                  ))}
               </OnAirContainer>
            </div>
            <div>
               <div className="flex justify-between items-center">
                  <HomeTitle upcoming>Upcoming Movies</HomeTitle>
                  <NavigationButtons prevId="prev-upc" nextId="next-upc" />
               </div>
               <UpcomingContainer>
                  {upcoming.map((movie) => (
                     <SwiperSlide key={movie.id}>
                        <UpcomingCard movie={movie} />
                     </SwiperSlide>
                  ))}
               </UpcomingContainer>
            </div>
         </HomeContainer> */}
      </PageAnimationContainer>
   );
}
