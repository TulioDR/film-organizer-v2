import "../styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import MainPageContainer from "../containers/MainPageContainer";

export default function App({
   Component,
   pageProps,
}: AppProps<{
   initialSession: Session;
}>) {
   const { route } = useRouter();
   const [supabaseClient] = useState(() => createBrowserSupabaseClient());
   const isAuth = route === "/auth" || route === "/auth/reset-password";
   return (
      <SessionContextProvider
         supabaseClient={supabaseClient}
         initialSession={pageProps.initialSession}
      >
         {isAuth ? (
            <Component {...pageProps} />
         ) : (
            <MainPageContainer>
               <Component {...pageProps} />
            </MainPageContainer>
         )}
      </SessionContextProvider>
   );
}
