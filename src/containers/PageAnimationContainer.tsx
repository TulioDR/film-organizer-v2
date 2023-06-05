import { AnimatePresence } from "framer-motion";
import LoadingPage from "../animations/LoadingPage";
import Head from "next/head";

interface Props {
   children: React.ReactNode;
   title: string;
   showPage: boolean;
   setShowPage: React.Dispatch<React.SetStateAction<boolean>>;
   showLoadingAnimation: boolean;
   setShowLoadingAnimation: React.Dispatch<React.SetStateAction<boolean>>;
   isLoading: boolean;
}

export default function PageAnimationContainer({
   children,
   title,
   showPage,
   setShowPage,
   showLoadingAnimation,
   setShowLoadingAnimation,
   isLoading,
}: Props) {
   const onAnimationComplete = () => {
      if (!isLoading) setShowLoadingAnimation(false);
   };
   return (
      <>
         <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {showPage && children}
         <AnimatePresence onExitComplete={() => setShowPage(true)}>
            {showLoadingAnimation && (
               <LoadingPage
                  isLoading={isLoading}
                  onAnimationComplete={onAnimationComplete}
               />
            )}
         </AnimatePresence>
      </>
   );
}
