import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import useInitialThemeColor from "@/hooks/useInitialThemeColor";

import { useEffect } from "react";

import LoginAdviceModal from "@/components/Modals/LoginAdviceModal";
import SaveMediaModal from "@/components/Modals/SaveMediaModal";
import useListsRefresh from "@/hooks/useListsRefresh";

import Notification from "@/components/Notification";
import { useUser } from "@clerk/nextjs";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Background from "@/features/background/components/Background";

import useBackground from "@/features/background/hooks/useBackground";

type Props = {
   children: React.ReactNode;
};

export default function MainPageContainer({ children }: Props) {
   const router = useRouter();
   useInitialThemeColor();

   const { refreshLists } = useListsRefresh();

   const { user } = useUser();
   useEffect(() => {
      console.log("running for the first time");
      refreshLists();
   }, [user]);

   const { pathname } = useRouter();
   const { removeBackground } = useBackground();
   useEffect(() => {
      if (pathname === "/[media_type]/[media_id]") return;
      removeBackground();
   }, [pathname, removeBackground]);

   return (
      <>
         <div id="modals-container"></div>
         <Background />
         <SaveMediaModal />
         <LoginAdviceModal />
         <Notification />
         <div className="flex">
            <Sidebar />
            <div className="flex-1 min-w-0 px-5 sm:px-10 pb-5 sm:pb-10">
               <Navbar />
               <AnimatePresence mode="wait">
                  {router.pathname !== "/auth" && (
                     <div key={router.pathname}>{children}</div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </>
   );
}
