import { useUser } from "@supabase/auth-helpers-react";
import { AnimatePresence, motion } from "framer-motion";
import ProfileImage from "../../../components/profile/ProfileImage";

type Props = {
   isOpen: boolean;
   close: () => void;
};

export default function ProfilePictureModal({ isOpen, close }: Props) {
   const user = useUser();
   console.log(user);
   return (
      <AnimatePresence>
         {isOpen && (
            <>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={close}
                  className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 grid place-content-center z-50"
               ></motion.div>
               <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 space-y-5">
                  <ProfileImage />
                  <div className="space-x-3">
                     <div></div>
                  </div>
               </div>
            </>
         )}
      </AnimatePresence>
   );
}
