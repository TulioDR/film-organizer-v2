import { AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import useAppSelector from "@/store/hooks/useAppSelector";
import ReelsBackground from "./ReelsBackground";

export default function Background() {
   const { background } = useAppSelector((state) => state.background);

   return (
      <div className="fixed bottom-0 left-0 h-[100lvh] -z-10 w-full bg-background-light dark:bg-background-dark">
         <ReelsBackground />
         <AnimatePresence mode="wait" propagate>
            {background && <Backdrop key={background} path={background} />}
         </AnimatePresence>
      </div>
   );
}
