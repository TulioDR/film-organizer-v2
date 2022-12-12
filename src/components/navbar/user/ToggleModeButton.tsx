import { motion } from "framer-motion";

type Props = {
   isOn: boolean;
};
const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30,
};
export default function ToggleModeButton({ isOn }: Props) {
   return (
      <div className="h-full py-2">
         <div
            className={`switch h-full w-9 p-[3px] flex rounded-full ${
               isOn ? "justify-end bg-blue-500" : "justify-start bg-gray-300"
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
