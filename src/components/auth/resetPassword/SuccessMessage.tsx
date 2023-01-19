import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

type Props = {
   successMessage: boolean;
};

export default function SuccessMessage({ successMessage }: Props) {
   const supabaseClient = useSupabaseClient();
   const router = useRouter();
   const handleClick = async () => {
      await supabaseClient.auth.signOut();
      router.push("/auth");
   };
   return (
      <AnimatePresence>
         {successMessage && (
            <motion.div
               initial={{ y: "-100%" }}
               animate={{ y: 0 }}
               transition={{ duration: 0.5, ease: "easeInOut" }}
               className="absolute top-0 left-0 w-full h-full bg-green-700 grid place-content-center"
            >
               <div className="flex flex-col items-center space-y-2">
                  <div className="font-semibold text-xl text-dark-text-hard">
                     Password changed Successfully
                  </div>
                  <motion.button
                     whileTap={{ scale: 0.95 }}
                     onTap={handleClick}
                     className="rounded-lg mx-auto text-light-text-hard py-2 px-4 bg-light-bg-primary"
                  >
                     Accept
                  </motion.button>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
