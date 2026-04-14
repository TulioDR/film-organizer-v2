import AccountCard from "../AccountCard";

import { useUser } from "@clerk/nextjs";
import AccountUsername from "./AccountUsername";
import ConnectAccounts from "./ConnectAccounts";
import PageSubtitle from "@/common/components/PageSubtitle";

type Props = {};

export default function AccountProfile({}: Props) {
   const { user } = useUser();

   if (!user) return <></>;
   return (
      <div className="">
         <PageSubtitle>Profile</PageSubtitle>
         <div className="w-full grid xl:grid-cols-2 xl:grid-rows-2 gap-4">
            <AccountCard title="Username">
               <AccountUsername />
            </AccountCard>

            <AccountCard title="Connected accounts" className="xl:row-span-2">
               <ConnectAccounts />
            </AccountCard>

            <AccountCard title="Email addresses">
               {user.emailAddresses.map((email, index) => (
                  <div key={index}>{email.emailAddress}</div>
               ))}
            </AccountCard>
         </div>
      </div>
   );
}
