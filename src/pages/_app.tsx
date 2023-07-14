import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import MainPageContainer from "../containers/MainPageContainer";
import wrapper from "@/store";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";

function App({
   Component,
   ...rest
}: AppProps<{
   initialSession: Session;
}>) {
   const { route } = useRouter();
   const [supabaseClient] = useState(() => createBrowserSupabaseClient());
   const isAuth = route === "/auth" || route === "/auth/reset-password";

   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;
   return (
      <Provider store={store}>
         <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
         >
            <AnimatePresence mode="wait">
               {isAuth ? (
                  <div key="one">
                     <Component {...pageProps} />
                  </div>
               ) : (
                  <div key="two">
                     <MainPageContainer>
                        <Component {...pageProps} />
                     </MainPageContainer>
                  </div>
               )}
            </AnimatePresence>
         </SessionContextProvider>
      </Provider>
   );
}

export default App;
