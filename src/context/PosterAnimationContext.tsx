import { createContext, useContext, useState } from "react";
import { windowExtraLarge } from "../data/constants/windowWidth";

interface PosterAnimationInterface {
   animatePoster: boolean;
   changeAnimatePoster: (animate: boolean) => void;
}

const PageAnimationContext = createContext({} as PosterAnimationInterface);
export default function usePosterAnimationContext() {
   return useContext(PageAnimationContext);
}

interface ProviderProps {
   children: React.ReactNode;
}

export function PosterAnimationProvider({ children }: ProviderProps) {
   const [animatePoster, setAnimationPoster] = useState<boolean>(true);

   const changeAnimatePoster = (animate: boolean) => {
      if (window.innerWidth < windowExtraLarge) {
         setAnimationPoster(true);
      } else setAnimationPoster(animate);
   };
   const value: PosterAnimationInterface = {
      animatePoster,
      changeAnimatePoster,
   };
   return (
      <PageAnimationContext.Provider value={value}>
         {children}
      </PageAnimationContext.Provider>
   );
}
