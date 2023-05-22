import { motion } from "framer-motion";
import ColorIcon from "./../ColorIcon";
import MainIcon from "./../MainIcon";
import useThemeContext from "../../../../context/ThemeContext";
import DropdownItem from "./../DropdownItem";
// import ToggleDarkMode from "./../ToggleDarkMode";
import { useRouter } from "next/router";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

type Props = {
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MainMenu({ setMenu, setIsOpen }: Props) {
   const { themeColor } = useThemeContext();
   const supabaseClient = useSupabaseClient();
   const user = useUser();
   const router = useRouter();
   const logIn = () => {
      router.push("/auth");
      setIsOpen(false);
   };
   const logOut = async () => {
      const data = await supabaseClient.auth.signOut();
      console.log(data);
      setIsOpen(false);
   };

   const profile = () => {
      router.push("/profile");
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
         {user && (
            <DropdownItem icon={<MainIcon icon="person" />} onClick={profile}>
               Profile
            </DropdownItem>
         )}
         <DropdownItem
            icon={<MainIcon icon="dark_mode" />}
            // onClick={toggleDarkMode}
            onClick={() => {}}
         >
            <div className="flex items-center justify-between h-full w-full">
               <span>Dark Mode</span>
               {/* <ToggleDarkMode isOn={isDark} /> */}
            </div>
         </DropdownItem>
         <DropdownItem
            icon={<ColorIcon color={themeColor} />}
            onClick={() => setMenu("colors")}
            expand
         >
            Theme Colors
         </DropdownItem>

         {user ? (
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
