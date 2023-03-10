import { AnimatePresence } from "framer-motion";
import LoadingPage from "../animations/LoadingPage";
import Head from "next/head";

import usePageLoadingContext from "../context/PageLoadingContext";

interface Props {
   children: React.ReactNode;
   title: string;
}

export default function PageAnimationContainer({ children, title }: Props) {
   const { showPage, setShowPage, showLoadingAnimation } =
      usePageLoadingContext();
   return (
      <>
         <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {showPage && children}
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {showLoadingAnimation && <LoadingPage />}
         </AnimatePresence>
      </>
   );
}
