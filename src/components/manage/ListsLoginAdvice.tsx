import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeContext from "../../context/ThemeContext";

export default function ListsLoginAdvice() {
   const { themeColor } = useThemeContext();
   const router = useRouter();
   const goToLogin = () => {
      router.push("/auth");
   };
   return (
      <div className="flex flex-col items-center justify-center text-light-text-normal dark:text-dark-text-normal">
         <span className="material-icons text-9xl text-light-text-hard dark:text-dark-text-hard">
            format_list_bulleted
         </span>
         <div className="text-3xl mb-4 text-center">
            Don't miss the opportunity to create your own Lists
         </div>
         <div className="text-lg text-center">
            Log in to save the Movies and Shows as you need
         </div>
         <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onTap={goToLogin}
            className="flex space-x-3 rounded-lg shadow-lg py-2 px-4 text-light-text-hard dark:text-dark-text-hard mt-5"
            style={{ backgroundColor: themeColor }}
         >
            <span className="material-icons">login</span>
            <span>LOG IN</span>
         </motion.button>
      </div>
   );
}
