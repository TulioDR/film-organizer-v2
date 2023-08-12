import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";

export default function LoginButton() {
   const user = useUser();
   if (user) return <></>;
   return (
      <motion.button variants={popUpAnimation}>
         <Link
            href="/auth"
            className="h-9 px-4 bg-secondary shadow-lg cursor-pointer hidden sm:flex items-center flex-shrink-0"
         >
            Log in
         </Link>
      </motion.button>
   );
}
