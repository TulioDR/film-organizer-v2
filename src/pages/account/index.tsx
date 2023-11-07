import { useEffect } from "react";

import { useUser } from "@clerk/nextjs";

import PageHead from "@/components/PageHead";

import Title from "@/components/Title";
import AccountProfile from "@/features/pages/account/components/AccountProfile";
import AccountSecurity from "@/features/pages/account/components/AccountSecurity";
import DangerZone from "@/features/pages/account/components/DangerZone";

export default function Account() {
   const { user } = useUser();
   useEffect(() => {
      if (!user) return;
      if (!user) return;
      console.log(user);
      console.log(user.passwordEnabled);
   }, [user]);

   if (!user) return <></>;
   return (
      <div className="px-10 pb-10">
         <div className="space-y-5 max-w-6xl">
            <PageHead title="Account" />
            <Title title="Account" />
            <AccountProfile />
            <AccountSecurity />
            <DangerZone />
         </div>
      </div>
   );
}
