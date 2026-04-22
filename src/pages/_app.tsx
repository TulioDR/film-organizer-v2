import "../styles/globals.css";
import "lenis/dist/lenis.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import wrapper from "@/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { ClerkProvider } from "@clerk/nextjs";
import { Fragment, useEffect } from "react";
import Background from "@/features/layout/background/components/Background";
import Navbar from "@/features/layout/navbar/components/Navbar";
import PageLoader from "@/features/layout/loader/components/PageLoader";
import Notification from "@/features/layout/notification/components/Notification";
import GetPlaylists from "@/common/components/GetPlaylists";
import { useCustomLenis } from "@/common/hooks/useCustomLenis";

function App({ Component, ...rest }: AppProps) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props || {};
   const router = useRouter();

   useEffect(() => {
      if ("scrollRestoration" in history) {
         history.scrollRestoration = "manual";
      }
   }, []);

   useEffect(() => {
      router.beforePopState((state) => {
         state.options.scroll = false;
         return true;
      });
   }, [router]);

   useCustomLenis(true);

   return (
      <>
         <ClerkProvider>
            <Provider store={store}>
               <GetPlaylists />
               <Navbar />
               <Background />
               <Notification />
               <PageLoader />
               <AnimatePresence mode="wait" propagate>
                  <Fragment key={router.pathname}>
                     <Component {...pageProps} />
                  </Fragment>
               </AnimatePresence>
            </Provider>
         </ClerkProvider>
      </>
   );
}

export default App;
