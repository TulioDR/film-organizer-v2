import { PositionModel } from "@/models/TransitionPosterModels";
import { useContext, createContext, useState } from "react";
import { windowExtraLarge } from "@/data/constants/windowWidth";

interface TransitionPosterInterface {
   selectedImg: string | null;
   position: PositionModel | null;
   setTransitionValues: (posterPath: string, element: HTMLElement) => void;
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

   const setTransitionValues = (posterPath: string, element: HTMLElement) => {
      if (window.innerWidth < windowExtraLarge) {
         return;
      }
      setSelectedImg(`https://image.tmdb.org/t/p/w780${posterPath}`);
      const { x, y, height } = element.getBoundingClientRect();
      setPosition({ top: y, left: x, height: height });
   };

   const value: TransitionPosterInterface = {
      selectedImg,
      position,
      setTransitionValues,
      showSpinner,
      setShowSpinner,
   };

   return (
      <TransitionPosterContext.Provider value={value}>
         {children}
      </TransitionPosterContext.Provider>
   );
}
