import { AnimatePresence } from "framer-motion";
import LoadingPage from "../animations/LoadingPage";

import usePageLoadingContext from "../context/PageLoadingContext";

interface Props {
   children: React.ReactNode;
}

export default function PageAnimationContainer({ children }: Props) {
   const { showPage, setShowPage, showLoadingAnimation } =
      usePageLoadingContext();
   return (
      <>
         {showPage && children}
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {showLoadingAnimation && <LoadingPage />}
         </AnimatePresence>
      </>
   );
}
