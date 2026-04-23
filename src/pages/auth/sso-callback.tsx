import { useClerk, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SSOCallback() {
   const clerk = useClerk();
   const { signIn } = useSignIn();
   const router = useRouter();
   const hasRun = useRef(false);

   useEffect(() => {
      (async () => {
         if (!clerk.loaded || hasRun.current) return;
         hasRun.current = true;

         if (signIn?.status === "complete") {
            await signIn.finalize({
               navigate: async ({ decorateUrl }) => {
                  const url = decorateUrl("/");
                  if (url.startsWith("http")) {
                     window.location.href = url;
                  } else {
                     router.push(url);
                  }
               },
            });
         }
      })();
   }, [clerk.loaded, signIn, router]);

   return (
      <div className="h-[100svh] w-full flex items-center justify-center">
         <div>Loading...</div>
      </div>
   );
}
