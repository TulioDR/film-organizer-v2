import { useEffect } from "react";

import { useUser } from "@clerk/nextjs";

import AccountProfile from "@/features/pages/account/components/AccountProfile";
import AccountSecurity from "@/features/pages/account/components/AccountSecurity";
import DangerZone from "@/features/pages/account/components/DangerZone";
import PageHead from "@/common/components/PageHead";

export default function Account() {
   const { user } = useUser();
   useEffect(() => {
      if (!user) return;
      // console.log(user);
      // console.log(user.passwordEnabled);
   }, [user]);

   if (!user) return <></>;
   return (
      <div className="w-full px-4 lg:px-32 pt-14 pb-14 xl:pb-4 mt-4 xl:mt-16 xl:pt-20">
         <PageHead title="Account" />
         <div className="w-full flex flex-col gap-4">
            <AccountProfile />
            <AccountSecurity />
            <DangerZone />
         </div>
      </div>
   );
}
