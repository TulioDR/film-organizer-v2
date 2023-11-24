import { PositionModel } from "../models/TransitionPosterModels";
import { useContext, createContext, useState } from "react";

import TransitionPoster from "../components/TransitionPoster";

interface TransitionPosterInterface {
   selectedImg: string | null;
   position: PositionModel | null;
   startPosterAnimation: (
      mediaType: "movie" | "tv",
      mediaId: number,
      poster: string
   ) => void;
   showSpinner: boolean;
   setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
   sidebarWidth: number;
   navbarHeight: number;
   isMobile: boolean;
}

const TransitionPosterContext = createContext({} as TransitionPosterInterface);
export default function useTransitionPosterContext() {
   return useContext(TransitionPosterContext);
}

interface Props {
   children: React.ReactNode;
}

export function TransitionPosterProvider({ children }: Props) {
   const [selectedImg, setSelectedImg] = useState<string | null>(null);
   const [position, setPosition] = useState<PositionModel | null>(null);
   const [showSpinner, setShowSpinner] = useState<boolean>(false);
   const [navbarHeight, setNavbarHeight] = useState<number>(0);
   const [sidebarWidth, setSidebarWidth] = useState<number>(0);

   const [isMobile, setIsMobile] = useState<boolean>(false);

   const onAnimationComplete = () => {
      setShowSpinner(true);
   };
   const startPosterAnimation = (
      mediaType: "movie" | "tv",
      mediaId: number,
      poster: string
   ) => {
      if (window.innerWidth < 640) setIsMobile(true);
      if (window.innerWidth >= 1024) {
         const sidebar = document.getElementById("sidebar")!;
         setSidebarWidth(sidebar.clientWidth);
      }

      const navbar = document.getElementById("navbar")!;
      setNavbarHeight(navbar.clientHeight);

      const img = `https://image.tmdb.org/t/p/w${780}${poster}`;
      setSelectedImg(img);
      const id = `${mediaType}-${mediaId}`;
      const element = document.getElementById(id)!;
      const { x, y, height, width } = element.getBoundingClientRect();
      setPosition({ top: y, left: x, height, width });
      element.style.transitionDuration = "0ms";
      element.style.visibility = "hidden";
   };

   const value: TransitionPosterInterface = {
      selectedImg,
      position,
      startPosterAnimation,
      showSpinner,
      setShowSpinner,
      sidebarWidth,
      navbarHeight,
      isMobile,
   };

   return (
      <TransitionPosterContext.Provider value={value}>
         <div className={`duration-300 ${selectedImg ? "opacity-0" : ""}`}>
            {children}
         </div>
         <TransitionPoster onAnimationComplete={onAnimationComplete} />
      </TransitionPosterContext.Provider>
   );
}
