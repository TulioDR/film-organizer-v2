import { useEffect } from "react";

import { useUser } from "@clerk/nextjs";

import AccountProfile from "@/features/pages/account/components/AccountProfile";
import AccountSecurity from "@/features/pages/account/components/AccountSecurity";
import DangerZone from "@/features/pages/account/components/DangerZone";
import PageHead from "@/common/components/PageHead";
import PageTitle from "@/common/components/PageTitle";

export default function Account() {
   const { user } = useUser();
   useEffect(() => {
      if (!user) return;
      // console.log(user);
      // console.log(user.passwordEnabled);
   }, [user]);

   if (!user) return <></>;
   return (
      <div className="space-y-5 max-w-6xl">
         <PageHead title="Account" />
         <AccountProfile />
         <AccountSecurity />
         <DangerZone />
      </div>
   );
}
