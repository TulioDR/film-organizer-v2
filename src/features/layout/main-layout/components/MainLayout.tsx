import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { useUser } from "@clerk/nextjs";

import Navbar from "@/features/layout/navbar/components/Navbar";
import Background from "@/features/layout/background/components/Background";

import { getLists } from "@/api/lists";
import { listActions } from "@/store/slices/list-slice";
import Notification from "@/features/layout/notification/components/Notification";
import LoginAdviceModal from "@/features/modals/user-modals/login-advice-modal/components/LoginAdviceModal";
import SaveMediaModal from "@/features/modals/media-modals/save-media-modal/components/SaveMediaModal";
import useInitialThemeColor from "@/common/hooks/useInitialThemeColor";
import FixedUIContainer from "./FixedUIContainer";
import PageLoader from "../../loader/components/PageLoader";
import useAppDispatch from "@/store/hooks/useAppDispatch";

type Props = {
   children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
   useInitialThemeColor();

   const dispatch = useAppDispatch();
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

   return (
      <>
         <FixedUIContainer>
            <Navbar />
         </FixedUIContainer>
         <Background />
         <SaveMediaModal />
         <LoginAdviceModal />
         <Notification />

         <AnimatePresence mode="wait" propagate>
            <PageLoader key={pathname}>{children}</PageLoader>
         </AnimatePresence>
      </>
   );
}
