import ProfileCardsGrid from "../ProfileCardsGrid";
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
      <>
         <PageSubtitle>Profile</PageSubtitle>
         <ProfileCardsGrid>
            <AccountCard title="Username">
               <AccountUsername />
            </AccountCard>

            <AccountCard title="Connected accounts" row>
               <ConnectAccounts />
            </AccountCard>

            <AccountCard title="Email addresses">
               {user.emailAddresses.map((email, index) => (
                  <div key={index}>{email.emailAddress}</div>
               ))}
            </AccountCard>
         </ProfileCardsGrid>
      </>
   );
}
