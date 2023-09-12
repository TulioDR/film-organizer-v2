import { PositionModel } from "@/models/TransitionPosterModels";
import { useContext, createContext, useState } from "react";
import { windowExtraLarge } from "@/data/constants/windowWidth";
import { useDispatch } from "react-redux";
import { posterAnimationActions } from "@/store/slices/poster-animation-slice";
import { useRouter } from "next/router";

interface TransitionPosterInterface {
   selectedImg: string | null;
   position: PositionModel | null;
   startPosterAnimation: (mediaType: "movie" | "tv", media: any) => void;
   showSpinner: boolean;
   setShowSpinner: React.Dispatch<React.SetStateAction<boolean>>;
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

   const dispatch = useDispatch();
   const router = useRouter();
   const startPosterAnimation = (mediaType: "movie" | "tv", media: any) => {
      router.push(`/${mediaType}/${media.media_id || media.id}`);
      if (window.innerWidth < windowExtraLarge) {
         return;
      }
      const posterPath = media.poster_path || media.media_poster;
      const img = `https://image.tmdb.org/t/p/w${780}${posterPath}`;
      setSelectedImg(img);
      const id = `${mediaType}-${media.id}`;
      const element = document.getElementById(id)!;
      const { x, y, height } = element.getBoundingClientRect();
      setPosition({ top: y, left: x, height: height });
      setTimeout(() => {
         element.style.transitionDuration = "0ms";
         element.style.visibility = "hidden";
      }, 100);

      dispatch(posterAnimationActions.changePosterAnimation(false));
   };

   const value: TransitionPosterInterface = {
      selectedImg,
      position,
      startPosterAnimation,
      showSpinner,
      setShowSpinner,
   };

   return (
      <TransitionPosterContext.Provider value={value}>
         {children}
      </TransitionPosterContext.Provider>
   );
}
