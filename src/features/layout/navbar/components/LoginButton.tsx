import Link from "next/link";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";

export default function LoginButton() {
   const { user } = useUser();
   if (user) return <></>;
   return (
      <motion.button className="hidden sm:block h-full shadow-md">
         <Link
            href="/auth"
            className="h-full w-24 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white"
         >
            Log in
         </Link>
      </motion.button>
   );
}
