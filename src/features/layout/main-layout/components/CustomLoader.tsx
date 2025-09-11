import React, { useEffect } from "react";
import Clapperboard from "../../loader/components/Clapperboard";
import { useRouter } from "next/router";

type Props = {};

export default function CustomLoader({}: Props) {
   const router = useRouter();
   const [isLoading, setIsLoading] = React.useState(false);

   useEffect(() => {
      let timeout: NodeJS.Timeout;
      const handleStart = (url: string) => {
         if (url === router.asPath) return;
         timeout = setTimeout(() => setIsLoading(true), 200);
      };

      router.events.on("routeChangeStart", handleStart);
      return () => {
         clearTimeout(timeout);
         router.events.off("routeChangeStart", handleStart);
      };
   }, [router]);

   if (!isLoading) return <></>;
   return (
      <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50 bg-black/50">
         <div className="w-96 rounded-md aspect-square bg-gray-200 flex flex-col items-center justify-center gap-2">
            <div className="aspect-[10/2] w-[70%]" />
            <div className="w-3/6 -rotate-[10deg] origin-bottom-left">
               <Clapperboard withReel spinningReel />
            </div>
            <div className="aspect-[10/2] w-[70%] bg-gray-800 flex items-center shadow-lg">
               <div className="border-y-2 border-white/20 w-full h-4/5 flex items-center justify-center">
                  <span className="font-title text-xl text-orange-300">
                     Loading...
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
}
