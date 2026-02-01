import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useNavItems() {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [activePage, setActivePage] = useState<string>("/movie");

   useEffect(() => {
      if (!router.isReady) return;
      if (router.pathname === "/[media_type]") {
         setActivePage(`/${router.query.media_type}`);
      } else setActivePage(router.pathname);
   }, [router.pathname, router.query.media_type, router.isReady]);

   useEffect(() => {
      const handleStart = () => setIsLoading(true);
      const handleStop = () => setIsLoading(false);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleStop);
      router.events.on("routeChangeError", handleStop);

      return () => {
         router.events.off("routeChangeStart", handleStart);
         router.events.off("routeChangeComplete", handleStop);
         router.events.off("routeChangeError", handleStop);
      };
   }, [router]);

   return { isLoading, activePage };
}
