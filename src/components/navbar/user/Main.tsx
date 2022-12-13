import UserItem from "./UserItem";
import { motion } from "framer-motion";
import ColorIcon from "./ColorIcon";
import MainIcon from "./MainIcon";
import useThemeContext from "../../../context/ThemeContext";

type Props = {
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
   isLoggedIn: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Main({
   setMenu,
   isLoggedIn,
   setIsLoggedIn,
   setIsOpen,
}: Props) {
   const { toggleDarkMode, isDark, themeColor } = useThemeContext();

   const logOut = () => {
      setIsLoggedIn(false);
      setIsOpen(false);
   };
   const logIn = () => {
      setIsLoggedIn(true);
      setIsOpen(false);
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
            onClick={toggleDarkMode}
            darkMode
            isDark={isDark}
         >
            Dark Mode
         </UserItem>
         <UserItem
            icon={<ColorIcon color={themeColor} />}
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
