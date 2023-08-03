import { motion } from "framer-motion";

type Props = {
   text: string;
   tagPosition: any;
};

export default function SideTag({ text, tagPosition }: Props) {
   return (
      <motion.div
         initial={{
            top: tagPosition.top,
            left: tagPosition.right,
            scale: 0.9,
            opacity: 0,
         }}
         animate={{
            scale: 1,
            opacity: 1,
         }}
         exit={{
            scale: 0.9,
            opacity: 0,
         }}
         transition={{ duration: 0.1 }}
         className="origin-left fixed z-10 px-5 w-max bg-secondary text-white shadow-xl rounded-lg"
      >
         <div className="flex items-center h-9">{text}</div>
      </motion.div>
   );
}
