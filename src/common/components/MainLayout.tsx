import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { Fragment } from "react";

import Navbar from "@/features/layout/navbar/components/Navbar";
import Background from "@/features/layout/background/components/Background";

import Notification from "@/features/layout/notification/components/Notification";
import PageLoader from "@/features/layout/loader/components/PageLoader";

type Props = {
   children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
   const { pathname } = useRouter();

   return (
      <>
         <Navbar />
         <Background />
         <Notification />
         <PageLoader />
         <AnimatePresence mode="wait" propagate>
            <Fragment key={pathname}>{children}</Fragment>
         </AnimatePresence>
      </>
   );
}
