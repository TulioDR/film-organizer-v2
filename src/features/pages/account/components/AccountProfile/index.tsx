import Subtitle from "@/components/Subtitle";
import ProfileCardsGrid from "../ProfileCardsGrid";
import AccountCard from "../AccountCard";

import { useUser } from "@clerk/nextjs";
import AccountUsername from "./AccountUsername";
import ConnectAccounts from "./ConnectAccounts";

type Props = {};

export default function AccountProfile({}: Props) {
   const { user } = useUser();

   if (!user) return <></>;
   return (
      <>
         <Subtitle>Profile</Subtitle>
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
