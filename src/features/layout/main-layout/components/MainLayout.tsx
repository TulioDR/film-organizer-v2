import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { useUser } from "@clerk/nextjs";

import Sidebar from "@/features/layout/sidebar/components/Sidebar";
import Navbar from "@/features/layout/navbar/components/Navbar";
import Background from "@/features/layout/background/components/Background";

import { getLists } from "@/api/lists";
import { listActions } from "@/store/slices/list-slice";
import { useDispatch } from "react-redux";
import Searchbar from "@/features/layout/navbar/components/Searchbar";
import Notification from "@/features/layout/notification/components/Notification";
import LoginAdviceModal from "@/features/modals/user-modals/login-advice-modal/components/LoginAdviceModal";
import SaveMediaModal from "@/features/modals/media-modals/save-media-modal/components/SaveMediaModal";
import Responsive from "@/common/components/Responsive";
import useInitialThemeColor from "@/common/hooks/useInitialThemeColor";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import FixedUIContainer from "./FixedUIContainer";
import TutorialButton from "../../tutorial-button/components/TutorialButton";
import PageTitle from "@/features/layout/page-title/components/PageTitle";
import TransitionCardLayout from "./TransitionCardLayout";
import PageLoader from "../../loader/components/PageLoader";

type Props = {
   children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
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

   const { asPath } = useRouter();

   useEffect(() => {
      console.log("there was a change in asPath");
      console.log(asPath);
   }, [asPath]);

   return (
      <>
         <div id="modals-container"></div>
         <FixedUIContainer>
            <Navbar />
            <Responsive minWidth={LG_MEDIA_QUERY}>
               <Searchbar />
               <Sidebar />
               <TutorialButton />
            </Responsive>
         </FixedUIContainer>
         <PageTitle />
         <TransitionCardLayout />
         <Background />
         <SaveMediaModal />
         <LoginAdviceModal />
         <Notification />

         <AnimatePresence mode="wait" propagate>
            <PageLoader key={asPath}>{children}</PageLoader>
         </AnimatePresence>
      </>
   );
}
