import Link from "next/link";
import { motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";
import { useUser } from "@clerk/nextjs";

export default function LoginButton() {
   const { user } = useUser();
   if (user) return <></>;
   return (
      <motion.button variants={popUpAnimation} className="hidden sm:block h-10">
         <Link
            href="/auth"
            className="h-full px-4 flex items-center bg-secondary-light dark:bg-secondary-dark shadow-lg cursor-pointer"
         >
            Log in
         </Link>
      </motion.button>
   );
}
