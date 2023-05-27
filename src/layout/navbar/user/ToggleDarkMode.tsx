import { motion } from "framer-motion";

import { useSelector } from "react-redux";

type Props = {
   isOn: boolean;
};
const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30,
};
export default function ToggleDarkMode({ isOn }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   return (
      <div className="h-full py-2">
         <div
            style={{ backgroundColor: isOn ? themeColor : "#d1d5db" }}
            className={`switch h-full w-9 p-[3px] flex rounded-full ${
               isOn ? "justify-end" : "justify-start bg-gray-300"
            }`}
         >
            <motion.div
               className="rounded-full h-full aspect-square bg-white"
               layout
               transition={spring}
            />
         </div>
      </div>
   );
}
