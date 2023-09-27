import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import wrapper from "@/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { ClerkProvider } from "@clerk/nextjs";
import { Fragment } from "react";
import MainPageContainer from "@/components/MainPageContainer";

function App({ Component, ...rest }: AppProps) {
   const { route } = useRouter();
   const isAuth = route === "/auth" || route === "/auth/sso-callback";

   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;

   const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
   return (
      <ClerkProvider publishableKey={publishableKey}>
         <Provider store={store}>
            <AnimatePresence mode="wait">
               {isAuth ? (
                  <Fragment key="auth">
                     <Component {...pageProps} />
                  </Fragment>
               ) : (
                  <MainPageContainer key="main">
                     <Component {...pageProps} />
                  </MainPageContainer>
               )}
            </AnimatePresence>
         </Provider>
      </ClerkProvider>
   );
}

export default App;
