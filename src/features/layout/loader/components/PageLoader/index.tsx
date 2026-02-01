import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { loaderActions } from "@/store/slices/loader-slice";
import LoadingBoard from "./LoadingBoard";

type Props = {
   children: React.ReactNode;
};

export default function PageLoader({ children }: Props) {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const { isLoading } = useAppSelector((state) => state.loader);

   useEffect(() => {
      let timeout: NodeJS.Timeout;
      const handleStart = (url: string) => {
         if (url === router.asPath) return;
         timeout = setTimeout(() => {
            dispatch(loaderActions.startLoading());
         }, 200);
      };

      router.events.on("routeChangeStart", handleStart);
      return () => {
         clearTimeout(timeout);
         router.events.off("routeChangeStart", handleStart);
      };
   }, [router]);

   return (
      <>
         {isLoading && <LoadingBoard />}
         <div
            className={`pt-32 lg:pt-32 px-4 lg:px-32 pb-24 xl:pb-24 w-full ${isLoading ? "pointer-events-none" : ""}`}
         >
            {children}
         </div>
      </>
   );
}
