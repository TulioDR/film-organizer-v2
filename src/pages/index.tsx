import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import PageTitle from "../components/PageTitle";
import NowPlayingContainer from "../components/home/nowPlaying/NowPlayingContainer";
import NowPlaying from "../components/home/nowPlaying/NowPlaying";
import OnAirContainer from "../components/home/onAir/OnAirContainer";
import OnAir from "../components/home/onAir/OnAir";
import UpcomingContainer from "../components/home/upcoming/UpcomingContainer";
import Upcoming from "../components/home/upcoming/Upcoming";

import usePageLoadingContext from "../context/PageLoadingContext";
import PageAnimationContainer from "../containers/PageAnimationContainer";
import NavigationButtons from "../components/home/NavigationButtons";

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
         <div className="space-y-6">
            <div>
               <div className="flex justify-between items-center">
                  <PageTitle>Now playing on Theaters</PageTitle>
                  <NavigationButtons prevId="prev-now" nextId="next-now" />
               </div>
               <NowPlayingContainer>
                  {nowPlaying.map((movie) => (
                     <SwiperSlide key={movie.id}>
                        <NowPlaying movie={movie} />
                     </SwiperSlide>
                  ))}
               </NowPlayingContainer>
            </div>
            <div>
               <div className="flex justify-between items-center">
                  <PageTitle>TV Series on Air</PageTitle>
                  <NavigationButtons prevId="prev-air" nextId="next-air" />
               </div>
               <OnAirContainer>
                  {onAir.map((tv) => (
                     <SwiperSlide key={tv.id}>
                        <OnAir tv={tv} />
                     </SwiperSlide>
                  ))}
               </OnAirContainer>
            </div>
            <div>
               <div className="flex justify-between items-center">
                  <PageTitle>Upcoming Movies</PageTitle>
                  <NavigationButtons prevId="prev-upc" nextId="next-upc" />
               </div>
               <UpcomingContainer>
                  {upcoming.map((movie) => (
                     <SwiperSlide key={movie.id}>
                        <Upcoming movie={movie} />
                     </SwiperSlide>
                  ))}
               </UpcomingContainer>
            </div>
         </div>
      </PageAnimationContainer>
   );
}
