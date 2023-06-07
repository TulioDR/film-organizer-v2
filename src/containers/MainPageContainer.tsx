import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import { PosterAnimationProvider } from "../context/PosterAnimationContext";

import Navbar from "../layout/Navbar";
import useInitialThemeColor from "@/hooks/useInitialThemeColor";
import Sidebar from "@/layout/Sidebar";
import { useEffect } from "react";
import { getLists } from "@/api/lists";
import { useUser } from "@supabase/auth-helpers-react";
import { useDispatch } from "react-redux";
import { listActions } from "@/store/slices/list-slice";
import BackgroundImage from "@/components/BackgroundImage";
import LoginAdviceModal from "@/components/Modals/LoginAdviceModal";
import SaveMediaModal from "@/components/Modals/SaveMediaModal";

type Props = {
   children: React.ReactNode;
};

export default function MainPageContainer({ children }: Props) {
   const router = useRouter();

   useInitialThemeColor();

   const dispatch = useDispatch();

   const user = useUser();
   useEffect(() => {
      const getListsEffect = async () => {
         if (!user) {
            dispatch(listActions.setLists([]));
            return;
         }
         console.log("fetch lists");
         const data = await getLists(user.id);
         dispatch(listActions.setLists(data));
      };
      getListsEffect();
   }, [user, dispatch]);

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
            <PosterAnimationProvider>
               <Navbar />
               <AnimatePresence mode="wait">
                  <motion.div key={router.asPath} className="relative">
                     {children}
                  </motion.div>
               </AnimatePresence>
            </PosterAnimationProvider>
         </div>
      </div>
   );
}
