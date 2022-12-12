import UserItem from "./UserItem";
import { motion } from "framer-motion";
import ColorIcon from "./ColorIcon";
import MainIcon from "./MainIcon";

type Props = {
   isDark: boolean;
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
   toggleTheme: () => void;
   isLoggedIn: boolean;
   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Main({
   setMenu,
   toggleTheme,
   isDark,
   isLoggedIn,
   setIsLoggedIn,
}: Props) {
   const logOut = () => {
      setIsLoggedIn(false);
   };
   const logIn = () => {
      setIsLoggedIn(true);
   };

   return (
      <motion.ul
         key="main"
         initial={{
            x: "-100%",
         }}
         animate={{
            x: 0,
         }}
         exit={{ x: "-100%" }}
         transition={{ duration: 0.4 }}
         className="w-full space-y-2"
      >
         <UserItem
            icon={<MainIcon icon="dark_mode" />}
            onClick={toggleTheme}
            darkMode
            isDark={isDark}
         >
            Dark Mode
         </UserItem>
         <UserItem
            icon={<ColorIcon />}
            onClick={() => setMenu("colors")}
            expand
         >
            Theme Colors
         </UserItem>
         {isLoggedIn ? (
            <UserItem icon={<MainIcon icon="logout" />} onClick={logOut}>
               Log out
            </UserItem>
         ) : (
            <UserItem icon={<MainIcon icon="login" />} onClick={logIn}>
               Log in / Sign up
            </UserItem>
         )}
      </motion.ul>
   );
}
