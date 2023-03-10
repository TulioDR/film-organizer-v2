import { createContext, useContext, useState } from "react";

interface AppContextInterface {
   isMovie: boolean;
   toggle: (e: React.SyntheticEvent) => void;
   showSidebar: boolean;
   toggleShowSidebar: () => void;
   setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
   openSidebar: boolean;
   toggleOpenSidebar: () => void;
}

interface ProviderProps {
   children: React.ReactNode;
}

const SidebarContext = createContext({} as AppContextInterface);
export default function useSidebarContext() {
   return useContext(SidebarContext);
}

export function SidebarProvider({ children }: ProviderProps) {
   const [isMovie, setIsMovie] = useState<boolean>(true);
   const toggle = () => setIsMovie(!isMovie);

   const [showSidebar, setShowSidebar] = useState<boolean>(false);
   const toggleShowSidebar = () => setShowSidebar(!showSidebar);

   const [openSidebar, setOpenSidebar] = useState<boolean>(true);
   const toggleOpenSidebar = () => setOpenSidebar(!openSidebar);

   const value: AppContextInterface = {
      isMovie,
      toggle,
      showSidebar,
      toggleShowSidebar,
      setShowSidebar,
      openSidebar,
      toggleOpenSidebar,
   };

   return (
      <SidebarContext.Provider value={value}>
         {children}
      </SidebarContext.Provider>
   );
}
