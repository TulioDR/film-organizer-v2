import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import useInitialThemeColor from "@/hooks/useInitialThemeColor";

import { useEffect } from "react";

import { useUser } from "@clerk/nextjs";

import Sidebar from "@/features/layout/sidebar/components/Sidebar";
import Navbar from "@/features/layout/navbar/components/Navbar";
import Background from "@/features/layout/background/components/Background";

import { getLists } from "@/api/lists";
import { listActions } from "@/store/slices/list-slice";
import { useDispatch } from "react-redux";
import useBackground from "@/features/layout/background/hooks/useBackground";
import SaveMediaModal from "@/features/modals/saveMediaModal/components/SaveMediaModal";
import Notification from "@/features/notification/components/Notification";
import LoginAdviceModal from "@/features/modals/loginAdviceModal/components/LoginAdviceModal";

type Props = {
   children: React.ReactNode;
};

export default function MainPageContainer({ children }: Props) {
   useInitialThemeColor();

   const dispatch = useDispatch();
   const { user } = useUser();
   useEffect(() => {
      const getInitialLists = async () => {
         if (!user) {
            dispatch(listActions.setLists(null));
            return;
         }
         const lists = await getLists(user.id);
         dispatch(listActions.setLists(lists));
      };
      getInitialLists();
   }, [user, dispatch]);

   const { pathname } = useRouter();
   const { removeBackground } = useBackground();
   useEffect(() => {
      if (pathname === "/[media_type]/[media_id]" || pathname === "/") return;
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
                  {pathname !== "/auth" && <div key={pathname}>{children}</div>}
               </AnimatePresence>
            </div>
         </div>
      </>
   );
}
