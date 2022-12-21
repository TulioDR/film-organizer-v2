import { motion } from "framer-motion";
import ColorIcon from "./../ColorIcon";
import MainIcon from "./../MainIcon";
import useThemeContext from "../../../../context/ThemeContext";
import DropdownItem from "./../DropdownItem";
import ToggleDarkMode from "./../ToggleDarkMode";

type Props = {
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
   isLoggedIn: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MainMenu({
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
         <DropdownItem
            icon={<MainIcon icon="dark_mode" />}
            onClick={toggleDarkMode}
         >
            <div className="flex items-center justify-between h-full w-full">
               <span>Dark Mode</span>
               <ToggleDarkMode isOn={isDark} />
            </div>
         </DropdownItem>
         <DropdownItem
            icon={<ColorIcon color={themeColor} />}
            onClick={() => setMenu("colors")}
            expand
         >
            Theme Colors
         </DropdownItem>
         {isLoggedIn ? (
            <DropdownItem icon={<MainIcon icon="logout" />} onClick={logOut}>
               Log out
            </DropdownItem>
         ) : (
            <DropdownItem icon={<MainIcon icon="login" />} onClick={logIn}>
               Log in / Sign up
            </DropdownItem>
         )}
      </motion.ul>
   );
}
