import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../layout/Navbar";
import useInitialThemeColor from "@/hooks/useInitialThemeColor";
import Sidebar from "@/layout/Sidebar";
import { useEffect } from "react";

import LoginAdviceModal from "@/components/Modals/LoginAdviceModal";
import SaveMediaModal from "@/components/Modals/SaveMediaModal";
import useListsRefresh from "@/hooks/useListsRefresh";
import { useUser } from "@supabase/auth-helpers-react";
import BackgroundImage from "@/components/BackgroundImage";
import Notification from "@/components/Notification";

type Props = {
   children: React.ReactNode;
};

export default function MainPageContainer({ children }: Props) {
   const router = useRouter();
   useInitialThemeColor();

   const { refreshLists } = useListsRefresh();

   const user = useUser();
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
            <div className="relative flex-1 min-w-0">
               <Navbar />
               <AnimatePresence mode="wait">
                  <motion.div key={router.asPath}>{children}</motion.div>
               </AnimatePresence>
            </div>
         </div>
      </>
   );
}
