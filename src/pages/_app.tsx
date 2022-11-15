import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import Sidebar from "../containers/Sidebar";
import Navbar from "../containers/Navbar";
import { PageLoadingProvider } from "../context/PageLoadingContext";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <div className="flex bg-gray-800 text-white">
         <Sidebar />
         <div className="flex-1 flex flex-col h-screen overflow-y-scroll overflow-x-hidden pr-5 pb-5">
            <Navbar />
            <AnimatePresence mode="wait">
               <motion.div key={router.route} className="flex-1">
                  <PageLoadingProvider>
                     <Component {...pageProps} />
                  </PageLoadingProvider>
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
}
