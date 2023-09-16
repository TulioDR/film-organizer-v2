import { useEffect } from "react";
import PageTitle from "../components/PageTitle";

import { useUser } from "@clerk/nextjs";
import useRemoveBackgroundImage from "@/hooks/useRemoveBackgroundImage";
import PageHead from "@/components/PageHead";
import DangerZone from "@/components/Account/DangerZone";
import AccountSecurity from "@/components/Account/AccountSecurity";
import AccountProfile from "@/components/Account/AccountProfile";

export default function Account() {
   useRemoveBackgroundImage();
   const { user } = useUser();
   useEffect(() => {
      console.log(user);
   }, []);

   if (!user) return <></>;
   return (
      <div className="px-10 pb-10">
         <div className="space-y-5 max-w-6xl">
            <PageHead title="Account" />
            <PageTitle>Account</PageTitle>
            <AccountProfile />
            <AccountSecurity />
            <DangerZone />
         </div>
      </div>
   );
}
