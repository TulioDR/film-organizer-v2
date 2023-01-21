import Image from "next/image";
import profile from "../../data/images/profile.jpeg";
import { motion } from "framer-motion";
import useThemeContext from "../../context/ThemeContext";

export default function ProfilePicture() {
   const { themeColor } = useThemeContext();

   return (
      <div className="flex flex-col items-center space-y-2">
         <div className="aspect-square w-full sm:w-72 bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-xl relative rounded-full overflow-hidden border-4 border-light-bg-secondary dark:border-dark-bg-secondary">
            <Image
               src={profile}
               alt="Tulio Ruzo"
               fill
               sizes="100%"
               className="object-cover"
            />
         </div>
         <motion.button
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: themeColor }}
            className="rounded-xl flex py-2 px-4 items-center space-x-1"
         >
            <span className="material-icons">edit</span>
            <span className="font-semibold">Edit Picture</span>
         </motion.button>
      </div>
   );
}
