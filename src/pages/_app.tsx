import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import wrapper from "@/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { ClerkProvider } from "@clerk/nextjs";
import { Fragment, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import PageLoader from "@/features/layout/loader/components/PageLoader";
import Background from "@/features/layout/background/components/Background";
import Navbar from "@/features/layout/navbar/components/Navbar";
import Notification from "@/features/layout/notification/components/Notification";

function App({ Component, ...rest }: AppProps) {
   const router = useRouter();
   const { route, pathname } = router;

   const isAuth = route === "/auth" || route === "/auth/sso-callback";

   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;

   const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

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

   return (
      <ClerkProvider publishableKey={publishableKey}>
         <Provider store={store}>
            <ReactLenis root />
            <AnimatePresence mode="wait">
               {isAuth ? (
                  <Fragment key="auth">
                     <Component {...pageProps} />
                  </Fragment>
               ) : (
                  <Fragment key="main">
                     <Navbar />
                     <Background />
                     <Notification />
                     <PageLoader />
                     <AnimatePresence mode="wait" propagate>
                        <Fragment key={pathname}>
                           <Component {...pageProps} />
                        </Fragment>
                     </AnimatePresence>
                  </Fragment>
               )}
            </AnimatePresence>
         </Provider>
      </ClerkProvider>
   );
}

export default App;
