import { PositionModel } from "../models/TransitionPosterModels";
import { useContext, createContext, useState } from "react";
import { windowExtraLarge } from "@/data/constants/windowWidth";
import { useDispatch } from "react-redux";
import { posterAnimationActions } from "@/store/slices/poster-animation-slice";
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
   const [sidebarWidth, setSidebarWidth] = useState<number>(0);

   const onAnimationComplete = () => {
      setShowSpinner(true);
   };

   const dispatch = useDispatch();
   const startPosterAnimation = (
      mediaType: "movie" | "tv",
      mediaId: number,
      poster: string
   ) => {
      if (window.innerWidth < windowExtraLarge) {
         return;
      }

      const sidebar = document.getElementById("sidebar")!;
      setSidebarWidth(sidebar.clientWidth);

      const posterPath = poster;
      const img = `https://image.tmdb.org/t/p/w${780}${posterPath}`;
      setSelectedImg(img);
      const id = `${mediaType}-${mediaId}`;
      const element = document.getElementById(id)!;
      const { x, y, height } = element.getBoundingClientRect();
      setPosition({ top: y, left: x, height: height });
      element.style.transitionDuration = "0ms";
      element.style.visibility = "hidden";

      dispatch(posterAnimationActions.changePosterAnimation(false));
   };

   const value: TransitionPosterInterface = {
      selectedImg,
      position,
      startPosterAnimation,
      showSpinner,
      setShowSpinner,
      sidebarWidth,
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
