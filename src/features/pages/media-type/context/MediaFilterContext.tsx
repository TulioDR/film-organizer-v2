import { createContext, useContext, useState } from "react";

interface ContextInterface {
   mediaType: "movie" | "tv";
   setMediaType: React.Dispatch<React.SetStateAction<"movie" | "tv">>;
}

const MediaFilterContext = createContext({} as ContextInterface);
export default function useMediaFilterContext() {
   return useContext(MediaFilterContext);
}

type Props = { children: React.ReactNode };
export function MediaFilterProvider({ children }: Props) {
   const [mediaType, setMediaType] = useState<"movie" | "tv">("movie");

   const value: ContextInterface = {
      mediaType,
      setMediaType,
   };

   return (
      <MediaFilterContext.Provider value={value}>
         {children}
      </MediaFilterContext.Provider>
   );
}
