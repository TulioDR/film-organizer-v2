import { useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { separateByCommas } from "../../utils/commas";
import CardTitle from "./CardTitle";
import ProfileRow from "./ProfileRow";
import ResetPasswordButton from "./ResetPasswordButton";
import { motion } from "framer-motion";

type Props = {
   openModal: () => void;
};
export default function MainInfoCard({ openModal }: Props) {
   const user = useUser()!;
   const [hasPassword, setHasPassword] = useState(false);

   useEffect(() => {
      const hasEmail = user.app_metadata.providers!.includes("email");
      if (hasEmail) setHasPassword(true);
      else setHasPassword(false);
   }, [user.app_metadata.providers]);

   return (
      <motion.div
         initial={{ x: "100%" }}
         animate={{ x: 0 }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.4 }}
         className="md:flex-1 flex flex-col h-72 md:h-auto w-full bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-xl rounded-xl p-5"
      >
         <CardTitle>{user.user_metadata.full_name || "User"}</CardTitle>
         <div className="flex flex-col justify-center flex-1 text-sm md:text-base space-y-1">
            <ProfileRow label="Email:">{user.email!}</ProfileRow>
            <ProfileRow label="Account created with:">
               <span className="capitalize">{user.app_metadata.provider!}</span>
            </ProfileRow>
            <ProfileRow label="Account is connected to:">
               {user.app_metadata.providers!.map((item: any, index: number) => (
                  <span key={item} className="mr-1 capitalize">
                     {item}
                     {separateByCommas(user.app_metadata.providers!, index)}
                  </span>
               ))}
            </ProfileRow>
            {hasPassword && <ResetPasswordButton openModal={openModal} />}
         </div>
      </motion.div>
   );
}
