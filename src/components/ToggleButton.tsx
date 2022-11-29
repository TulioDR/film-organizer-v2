import { motion } from "framer-motion";

type Props = {
   isOn: boolean;
};
const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30,
};
export default function ToggleButton({ isOn }: Props) {
   return (
      <div
         className={`switch h-4 w-7 p-[3px] flex rounded-full bg-white mr-2 ${
            isOn ? "justify-end" : "justify-start"
         }`}
      >
         <motion.div
            className="rounded-full h-full aspect-square bg-blue-500"
            layout
            transition={spring}
         />
      </div>
   );
}
