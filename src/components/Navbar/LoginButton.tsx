import Link from "next/link";
import { motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";
import { useUser } from "@clerk/nextjs";

export default function LoginButton() {
   const { user } = useUser();
   if (user) return <></>;
   return (
      <motion.button variants={popUpAnimation}>
         <Link
            href="/auth"
            className="h-10 px-4 bg-secondary-light dark:bg-secondary-dark shadow-lg cursor-pointer hidden sm:flex items-center flex-shrink-0"
         >
            Log in
         </Link>
      </motion.button>
   );
}
