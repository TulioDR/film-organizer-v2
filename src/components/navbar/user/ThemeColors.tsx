import UserItem from "./UserItem";
import { motion } from "framer-motion";
import ColorIcon from "./ColorIcon";
import useThemeContext from "../../../context/ThemeContext";

type Props = {
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
};

interface ThemeColorsModel {
   name: string;
   color: string;
}

const themeColors: ThemeColorsModel[] = [
   { name: "amber", color: "#d97706" },
   { name: "orange", color: "#ea580c" },
   { name: "lime", color: "#4d7c0f" },
   { name: "sky", color: "#0ea5e9" },
   { name: "blue", color: "#3b82f6" },
   { name: "purple", color: "#a855f7" },
   { name: "pink", color: "#ec4899" },
];

export default function ThemeColors({ setMenu }: Props) {
   const { setThemeColor } = useThemeContext();

   return (
      <motion.ul
         key="colors"
         initial={{
            x: "100%",
         }}
         animate={{
            x: 0,
         }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.4 }}
         className="w-full space-y-2 absolute left-0 top-0"
      >
         <div className="font-semibold text-2xl flex space-x-2 pl-2">
            <button
               onClick={() => setMenu("main")}
               className="rounded-full aspect-square w-9 hover:bg-gray-400 dark:hover:bg-gray-600 grid place-content-center"
            >
               <span className="material-icons ">west</span>
            </button>
            <span>Theme Colors</span>
         </div>
         {themeColors.map(({ name, color }) => (
            <UserItem
               key={name}
               icon={<ColorIcon color={color} />}
               onClick={() => setThemeColor(color)}
            >
               {name}
            </UserItem>
         ))}
      </motion.ul>
   );
}
