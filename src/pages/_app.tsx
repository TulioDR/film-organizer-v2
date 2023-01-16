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
   const router = useRouter();
   const [supabaseClient] = useState(() => createBrowserSupabaseClient());

   return (
      <SessionContextProvider
         supabaseClient={supabaseClient}
         initialSession={pageProps.initialSession}
      >
         {router.asPath === "/auth" ? (
            <Component {...pageProps} />
         ) : (
            <MainPageContainer>
               <Component {...pageProps} />
            </MainPageContainer>
         )}
      </SessionContextProvider>
   );
}
