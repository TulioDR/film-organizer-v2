import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import { ListsProvider } from "../context/ListsContext";
import { PageLoadingProvider } from "../context/PageLoadingContext";
import { SidebarProvider } from "../context/SidebarContext";
import { ThemeProvider } from "../context/ThemeContext";
import SaveMediaModal from "../layout/modals/saveMedia/SaveMediaModal";
import Navbar from "../layout/navbar/Navbar";
import SidebarsContainer from "./SidebarsContainer";

type Props = {
   children: React.ReactNode;
};

export default function MainPageContainer({ children }: Props) {
   const router = useRouter();
   return (
      <div className="flex bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-hard dark:text-dark-text-hard">
         <ThemeProvider>
            <ListsProvider>
               <SidebarProvider>
                  <SaveMediaModal />
                  <SidebarsContainer />
                  <div
                     id="scroll-container"
                     className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden pr-5 pl-3 pb-5"
                  >
                     <Navbar />
                     <AnimatePresence mode="wait">
                        <motion.div key={router.asPath}>
                           <PageLoadingProvider>{children}</PageLoadingProvider>
                        </motion.div>
                     </AnimatePresence>
                  </div>
               </SidebarProvider>
            </ListsProvider>
         </ThemeProvider>
      </div>
   );
}
