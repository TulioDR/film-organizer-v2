import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function ListsLoginAdvice() {
   const { themeColor } = useSelector((state: any) => state.theme);

   const router = useRouter();
   const goToLogin = () => {
      router.push("/auth");
   };
   return (
      <div className="flex flex-col items-center justify-center text-dark-text-normal mt-5">
         <div className="text-dark-text-hard">
            <span className="material-icons !text-7xl sm:!text-9xl">
               format_list_bulleted
            </span>
         </div>
         <div className="text-3xl mb-4 text-center">
            {"Don't miss the opportunity to create your own Lists"}
         </div>
         <div className="text-lg text-center">
            Log in to save the Movies and Shows as you need
         </div>
         <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onTap={goToLogin}
            className="flex space-x-3 rounded-lg shadow-lg py-2 px-4 text-dark-text-hard mt-5"
            style={{ backgroundColor: themeColor }}
         >
            <span className="material-icons">login</span>
            <span>LOG IN</span>
         </motion.button>
      </div>
   );
}
