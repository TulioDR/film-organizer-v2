import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";

import { PageLoadingProvider } from "../context/PageLoadingContext";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { MediaTypeProvider } from "../context/MediaTypeContext";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <div className="flex bg-gray-800 text-white">
         <MediaTypeProvider>
            <Sidebar />
            <div
               id="scroll-container"
               className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden pr-5 pb-5"
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
         </MediaTypeProvider>
      </div>
   );
}
