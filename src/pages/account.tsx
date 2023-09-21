import { useEffect } from "react";

import { useUser } from "@clerk/nextjs";
import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import PageHead from "@/components/PageHead";
import DangerZone from "@/components/Pages/Account/DangerZone";
import AccountSecurity from "@/components/Pages/Account/AccountSecurity";
import AccountProfile from "@/components/Pages/Account/AccountProfile";
import Title from "@/components/Title";

export default function Account() {
   useRemoveBackgroundImage();
   const { user } = useUser();
   useEffect(() => {
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
