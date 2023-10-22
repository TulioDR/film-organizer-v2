import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import useInitialThemeColor from "@/hooks/useInitialThemeColor";

import { useEffect } from "react";

import LoginAdviceModal from "@/components/Modals/LoginAdviceModal";
import SaveMediaModal from "@/components/Modals/SaveMediaModal";
import useListsRefresh from "@/hooks/useListsRefresh";
import BackgroundImage from "@/components/BackgroundImage";
import Notification from "@/components/Notification";
import { useUser } from "@clerk/nextjs";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
   children: React.ReactNode;
};

export default function MainPageContainer({ children }: Props) {
   const router = useRouter();
   console.log(router.pathname);
   useInitialThemeColor();

   const { refreshLists } = useListsRefresh();

   const { user } = useUser();
   useEffect(() => {
      console.log("running for the first time");
      refreshLists();
   }, [user]);

   return (
      <>
         <div id="modals-container"></div>
         <BackgroundImage />
         <SaveMediaModal />
         <LoginAdviceModal />
         <Notification />
         <div className="flex">
            <Sidebar />
            <div className="flex-1 min-w-0 px-5 sm:px-10 pb-5 sm:pb-10">
               <Navbar />
               <AnimatePresence mode="wait">
                  {router.pathname !== "/auth" && (
                     <motion.div key={router.pathname}>{children}</motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </>
   );
}
