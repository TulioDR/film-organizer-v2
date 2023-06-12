import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../layout/Navbar";
import useInitialThemeColor from "@/hooks/useInitialThemeColor";
import Sidebar from "@/layout/Sidebar";
import { useEffect } from "react";
import BackgroundImage from "@/components/BackgroundImage";
import LoginAdviceModal from "@/components/Modals/LoginAdviceModal";
import SaveMediaModal from "@/components/Modals/SaveMediaModal";
import useListsRefresh from "@/hooks/useListsRefresh";
import { useUser } from "@supabase/auth-helpers-react";

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
      <div className="flex text-white">
         <BackgroundImage />
         <SaveMediaModal />
         <LoginAdviceModal />
         <div id="modals-container"></div>
         <Sidebar />
         <div
            id="scroll-container"
            className="flex-1 flex flex-col h-screen overflow-y-auto overflow-x-hidden"
         >
            <Navbar />
            <AnimatePresence mode="wait">
               <motion.div key={router.asPath} className="relative">
                  {children}
               </motion.div>
            </AnimatePresence>
         </div>
      </div>
   );
}
