import Poster from "@/components/Poster";
import React from "react";
import CardDate from "./CardDate";

type Props = {
   button: React.ReactNode;
   alt: string;
   backdrop: string;
   date: Date;
};

export default function BackHeader({ button, alt, backdrop, date }: Props) {
   return (
      <div className="relative">
         <div className="rounded-lg sm:rounded-3xl overflow-hidden">
            <Poster alt={alt} posterPath={backdrop} size="lg" backPoster />
         </div>
         <div className="sm:hidden w-full h-full absolute top-0 left-0 grid place-content-center">
            {button}
         </div>
         <div className="hidden sm:flex gap-3 absolute bottom-0 translate-y-1/2 w-full px-3 z-10">
            <CardDate date={date} />
            {button}
         </div>
      </div>
   );
}
