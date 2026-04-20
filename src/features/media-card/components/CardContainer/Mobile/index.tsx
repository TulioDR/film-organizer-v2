import MainContainer from "../MainContainer";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   layoutId: string;
   isLoading: boolean;
};

export default function Mobile({ children, layoutId, isLoading }: Props) {
   return (
      <motion.div
         layout
         className={`aspect-[2/3] w-full ${isLoading ? "pointer-events-none" : ""}`}
      >
         <MainContainer layoutId={layoutId} isLoading={isLoading}>
            {children}
         </MainContainer>
      </motion.div>
   );
}
