import { useEffect, useState } from "react";

import API_PUBLIC from "@/api/public";

import Marquee from "@/features/pages/home/Marquee";
import PageHead from "@/common/components/PageHead";
import { Media } from "@/common/models/Media";

export default function Home() {
   const [nowPlaying, setNowPlaying] = useState<Media[]>([]);

   useEffect(() => {
      const getData = async () => {
         const { data } = await API_PUBLIC.get("/home");
         setNowPlaying(data[0].results);
         // setOnAir(data[1].results);
         // setUpcoming(data[2].results);
      };
      getData();
   }, []);

   const [nowP1, setNowP1] = useState<Media[]>([]);
   const [nowP2, setNowP2] = useState<Media[]>([]);

   useEffect(() => {
      const midpoint = Math.floor(nowPlaying.length / 2);
      const firstHalf = nowPlaying.slice(0, midpoint);
      const secondHalf = nowPlaying.slice(midpoint);
      setNowP1(firstHalf);
      setNowP2(secondHalf);
   }, [nowPlaying]);

   return (
      <>
         <PageHead title="Film Organizer" />
         <div className="h-[100svh] w-full flex justify-center">
            <div className="w-[50vw] flex gap-4 h-full">
               {Array.from({ length: 4 }).map((_, index) => (
                  <Marquee
                     key={index}
                     array={index % 2 === 0 ? nowP1 : nowP2}
                     reverse={index % 2 === 0}
                     initialY={index * (100 / 4)}
                  />
               ))}
            </div>
         </div>
      </>
   );
}
