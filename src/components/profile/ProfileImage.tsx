import Image from "next/image";
import { motion } from "framer-motion";
import { useUser } from "@supabase/auth-helpers-react";

export default function ProfileImage() {
   const user = useUser()!;
   const image = user?.user_metadata.avatar_url || null;
   return (
      <motion.div
         layoutId="profilePicture"
         className="aspect-square w-full sm:w-72 bg-secondary shadow-xl relative rounded-full overflow-hidden border-[6px] border-secondary"
      >
         {image ? (
            <Image
               src={image}
               alt="Tulio Ruzo"
               fill
               sizes="100%"
               className="object-cover"
            />
         ) : (
            <div className="w-full h-full grid place-content-center">
               <div className="text-9xl capitalize">
                  {user.email?.charAt(0)}
               </div>
            </div>
         )}
      </motion.div>
   );
}
