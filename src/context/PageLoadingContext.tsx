import { createContext, useContext, useState } from "react";

interface AppContextInterface {
   isLoading: boolean;
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
   showPage: boolean;
   setShowPage: React.Dispatch<React.SetStateAction<boolean>>;
   showLoadingAnimation: boolean;
   setShowLoadingAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ProviderProps {
   children: React.ReactNode;
}

const PageLoadingContext = createContext({} as AppContextInterface);
export default function usePageLoadingContext() {
   return useContext(PageLoadingContext);
}

export function PageLoadingProvider({ children }: ProviderProps) {
   const [showLoadingAnimation, setShowLoadingAnimation] =
      useState<boolean>(true);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [showPage, setShowPage] = useState<boolean>(false);

   const value: AppContextInterface = {
      isLoading,
      setIsLoading,
      showPage,
      setShowPage,
      showLoadingAnimation,
      setShowLoadingAnimation,
   };

   return (
      <PageLoadingContext.Provider value={value}>
         {children}
      </PageLoadingContext.Provider>
   );
}
