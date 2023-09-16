import Subtitle from "@/components/Subtitle";
import ProfileCardsGrid from "../ProfileCardsGrid";
import AccountCard from "../AccountCard";
import ProfileCardInner from "../AccountCard/ProfileCardInner";
import { useUser } from "@clerk/nextjs";

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
               {user!.externalAccounts.map((acc, index) => (
                  <ProfileCardInner key={index}>
                     {acc.provider}
                  </ProfileCardInner>
               ))}
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
