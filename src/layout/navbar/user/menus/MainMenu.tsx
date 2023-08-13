import { motion } from "framer-motion";
import ColorIcon from "./../ColorIcon";
import MainIcon from "./../MainIcon";
import DropdownItem from "./../DropdownItem";
// import ToggleDarkMode from "./../ToggleDarkMode";
import { useRouter } from "next/router";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useDispatch, useSelector } from "react-redux";
import ToggleDarkMode from "../ToggleDarkMode";
import StoreModel from "@/models/StoreModel";
import { themeActions } from "@/store/slices/theme-slice";
import { useEffect } from "react";
import { darkThemeColors, lightThemeColors } from "@/data/themeColors";

type Props = {
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MainMenu({ setMenu, setIsOpen }: Props) {
   const { themeColor, isDarkMode, themeColorName } = useSelector(
      (state: StoreModel) => state.theme
   );
   const dispatch = useDispatch();

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

   const toggle = () => {
      dispatch(themeActions.toggleDarkMode());
   };

   useEffect(() => {
      if (isDarkMode) {
         const newColor = darkThemeColors.find(
            ({ name }) => name === themeColorName
         );
         dispatch(themeActions.changeThemeColor(newColor));
      } else {
         const newColor = lightThemeColors.find(
            ({ name }) => name === themeColorName
         );
         dispatch(themeActions.changeThemeColor(newColor));
      }
   }, [isDarkMode]);

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
         <DropdownItem icon={<MainIcon icon="dark_mode" />} onClick={toggle}>
            <div className="flex items-center justify-between h-full w-full">
               <span>Dark Mode</span>
               <ToggleDarkMode />
            </div>
         </DropdownItem>
         <DropdownItem
            icon={<ColorIcon color={themeColor} />}
            onClick={() => setMenu("colors")}
            expand
         >
            Theme Colors
         </DropdownItem>

         {false ? (
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
