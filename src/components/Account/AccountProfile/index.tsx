import Subtitle from "@/components/Subtitle";
import ProfileCardsGrid from "../ProfileCardsGrid";
import AccountCard from "../AccountCard";
import ProfileCardInner from "../AccountCard/ProfileCardInner";
import { useUser } from "@clerk/nextjs";
import ConnectedAccount from "./ConnectedAccount";

type Props = {};

export default function AccountProfile({}: Props) {
   const { user } = useUser();
   return (
      <>
         <Subtitle>Profile</Subtitle>
         <ProfileCardsGrid>
            <AccountCard title="Username">
               <ProfileCardInner>{user!.username}</ProfileCardInner>
            </AccountCard>

            <AccountCard title="Connected accounts" row>
               <div className="space-y-3 pl-5">
                  {user!.externalAccounts.map((acc, index) => (
                     <ConnectedAccount key={index} provider={acc.provider} />
                  ))}
               </div>
            </AccountCard>

            <AccountCard title="Email addresses">
               {user!.emailAddresses.map((email, index) => (
                  <ProfileCardInner key={index}>
                     {email.emailAddress}
                  </ProfileCardInner>
               ))}
            </AccountCard>
         </ProfileCardsGrid>
      </>
   );
}
