import { motion } from "framer-motion";
import Image from "next/image";
import useTransitionPosterContext from "../context/TransitionPosterContext";
import { useRouter } from "next/router";

type Props = {};

export default function TransitionPoster({}: Props) {
   const { position, selectedImg, sidebarWidth } = useTransitionPosterContext();

   const router = useRouter();
   const isHome = router.asPath === "/";

   if (!selectedImg || !position) return <></>;
   return (
      <motion.div
         initial={{
            left: position.left,
            top: position.top,
            height: position.height,
            borderRadius: isHome ? 8 : 24,
         }}
         exit={{
            left: sidebarWidth + 40,
            top: 120,
            height: "calc(100vh - 120px - 40px)",
            borderRadius: 24,
         }}
         transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
         className="fixed z-50 overflow-hidden"
      >
         <div className="relative h-full aspect-[2/3]">
            <Image
               alt="selected"
               src={selectedImg}
               fill
               sizes="100%"
               priority
            />
         </div>
      </motion.div>
   );
}
