import { motion } from "framer-motion";
import Image from "next/image";
import useTransitionPosterContext from "../context/TransitionPosterContext";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/LoadingSpinner";

type Props = {};

export default function TransitionPoster({}: Props) {
   const { position, selectedImg, showSpinner, sidebarWidth } =
      useTransitionPosterContext();

   const router = useRouter();
   const isHome = router.asPath === "/";

   if (!selectedImg || !position) return <></>;
   return (
      <motion.div
         initial={{
            paddingLeft: position.left,
            top: position.top,
            height: position.height,
         }}
         exit={{
            paddingLeft: sidebarWidth + 40,
            top: 96,
            height: "calc(100vh - 136px)",
            borderRadius: 24,
         }}
         transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
         className="fixed top-0 left-0 w-full z-50 pr-10 flex"
      >
         <div className="relative h-full aspect-[2/3] rounded-3xl overflow-hidden">
            <Image
               alt="selected"
               src={selectedImg}
               fill
               sizes="100%"
               priority
            />
         </div>
         <div className="flex-1 h-full flex items-center justify-center">
            {showSpinner && <LoadingSpinner />}
         </div>
      </motion.div>
   );
}
