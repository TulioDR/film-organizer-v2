import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";

import { PageLoadingProvider } from "../context/PageLoadingContext";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { SidebarProvider } from "../context/SidebarContext";

import Navbar from "../layout/Navbar";
import SidebarsContainer from "../containers/SidebarsContainer";
import { ThemeProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <div className="flex bg-gray-200 dark:bg-gray-800 duration-200 dark:text-white">
         <ThemeProvider>
            <SidebarProvider>
               <SidebarsContainer />
               <div
                  id="scroll-container"
                  className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden px-5 pb-5"
               >
                  <Navbar />
                  <AnimatePresence mode="wait">
                     <motion.div key={router.asPath}>
                        <PageLoadingProvider>
                           <Component {...pageProps} />
                        </PageLoadingProvider>
                     </motion.div>
                  </AnimatePresence>
               </div>
            </SidebarProvider>
         </ThemeProvider>
      </div>
   );
}
