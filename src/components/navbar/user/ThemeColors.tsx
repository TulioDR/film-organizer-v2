import UserItem from "./UserItem";
import { motion } from "framer-motion";
import ColorIcon from "./ColorIcon";

type Props = {
   setMenu: React.Dispatch<React.SetStateAction<"main" | "colors">>;
};

export default function ThemeColors({ setMenu }: Props) {
   const setColor = (color: string) => {
      console.log(color);
   };
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
         <UserItem icon={<ColorIcon />} onClick={() => setColor("Red")}>
            Red
         </UserItem>
         <UserItem icon={<ColorIcon />} onClick={() => setColor("Red")}>
            Blue
         </UserItem>
         <UserItem icon={<ColorIcon />} onClick={() => setColor("Red")}>
            Magenta
         </UserItem>
         <UserItem icon={<ColorIcon />} onClick={() => setColor("Red")}>
            Grey
         </UserItem>
      </motion.ul>
   );
}
