import Link from "next/link";
import { motion } from "framer-motion";
import { popUpAnimation } from "@/animations/PopUpAnimation";
import { useUser } from "@clerk/nextjs";

export default function LoginButton() {
   const { user } = useUser();
   if (user) return <></>;
   return (
      <motion.button
         variants={popUpAnimation}
         className="hidden sm:block h-full"
      >
         <Link
            href="/auth"
            className="h-full w-24 flex items-center justify-center bg-white text-black"
         >
            Log in
         </Link>
      </motion.button>
   );
}
