import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import { ListsProvider } from "../context/ListsContext";
import { PosterAnimationProvider } from "../context/PosterAnimationContext";
import LoginAdviceModal from "../layout/modals/loginAdvice/LoginAdviceModal";
import SaveMediaModal from "../layout/modals/saveMedia/SaveMediaModal";
import Navbar from "../layout/Navbar";
import useInitialThemeColor from "@/hooks/useInitialThemeColor";
import Sidebar from "@/layout/Sidebar";

type Props = {
   children: React.ReactNode;
};

export default function MainPageContainer({ children }: Props) {
   const router = useRouter();

   useInitialThemeColor();

   return (
      <div className="flex text-white">
         <ListsProvider>
            <SaveMediaModal />
            <LoginAdviceModal />
            <div id="modals-container"></div>
            <Sidebar />
            <div
               id="scroll-container"
               className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden"
            >
               <PosterAnimationProvider>
                  <Navbar />
                  <AnimatePresence mode="wait">
                     <motion.div key={router.asPath} className="relative">
                        {children}
                     </motion.div>
                  </AnimatePresence>
               </PosterAnimationProvider>
            </div>
         </ListsProvider>
      </div>
   );
}
