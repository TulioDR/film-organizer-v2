import { useEffect } from "react";
import { useRouter } from "next/router";
import useAppSelector from "@/store/hooks/useAppSelector";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { loaderActions } from "@/store/slices/loader-slice";
import LoadingBoard from "./LoadingBoard";

type Props = {};

export default function PageLoader({}: Props) {
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

      const handleStop = () => {
         clearTimeout(timeout);
         dispatch(loaderActions.stopLoading());
      };

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleStop);
      router.events.on("routeChangeError", handleStop); // Handles canceled/failed routes

      return () => {
         clearTimeout(timeout);
         router.events.off("routeChangeStart", handleStart);
         router.events.off("routeChangeComplete", handleStop);
         router.events.off("routeChangeError", handleStop);
      };
   }, [router]);

   if (!isLoading) return <></>;
   return <LoadingBoard />;
}
