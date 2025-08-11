import { AnimationControls, motion } from "framer-motion";

type Props = {
   textControls: AnimationControls;
};

export default function DeleteFormMessage({ textControls }: Props) {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={textControls}
         className="h-full overflow-hidden"
      >
         <div className="truncate h-full flex items-center pr-4">
            Select the media te delete
         </div>
      </motion.div>
   );
}
