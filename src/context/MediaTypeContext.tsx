import { createContext, useContext, useState } from "react";

interface AppContextInterface {
   isMovie: boolean;
   toggle: () => void;
}

interface ProviderProps {
   children: React.ReactNode;
}

const MediaTypeContext = createContext({} as AppContextInterface);
export default function useMediaTypeContext() {
   return useContext(MediaTypeContext);
}

export function MediaTypeProvider({ children }: ProviderProps) {
   const [isMovie, setIsMovie] = useState<boolean>(true);
   const toggle = () => setIsMovie(!isMovie);

   const value: AppContextInterface = {
      isMovie,
      toggle,
   };

   return (
      <MediaTypeContext.Provider value={value}>
         {children}
      </MediaTypeContext.Provider>
   );
}
