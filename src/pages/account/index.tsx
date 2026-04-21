import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";

import AccountProfile from "@/features/pages/account/components/AccountProfile";
import AccountSecurity from "@/features/pages/account/components/AccountSecurity";
import DangerZone from "@/features/pages/account/components/DangerZone";
import PageHead from "@/common/components/PageHead";

export default function Account() {
   const { user } = useUser();
   if (!user) return <></>;
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.95 }}
         transition={{ duration: 0.2 }}
         className="w-full px-4 lg:px-32 pt-14 pb-14 xl:pb-4 mb-4 xl:mb-0 mt-4 xl:mt-16 xl:pt-20"
      >
         <PageHead title="Account" />
         <div className="w-full flex flex-col gap-4">
            <AccountProfile />
            <div className="w-full grid xl:grid-cols-2 gap-4">
               <AccountSecurity />
               <DangerZone />
            </div>
         </div>
      </motion.div>
   );
}
