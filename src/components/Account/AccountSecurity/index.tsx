import Subtitle from "@/components/Subtitle";
import ProfileCardsGrid from "../ProfileCardsGrid";
import AccountCard from "../AccountCard";
import ProfileCardInner from "../AccountCard/ProfileCardInner";
import { useUser } from "@clerk/nextjs";
import AccountButton from "../AccountButton";

type Props = {};

export default function AccountSecurity({}: Props) {
   const { user } = useUser();
   return (
      <>
         <Subtitle>Security</Subtitle>
         <ProfileCardsGrid>
            <AccountCard title="Update password" expand>
               <div className="flex justify-between items-center">
                  {/* {user.} */}
                  <ProfileCardInner>
                     Change the account's password.
                  </ProfileCardInner>
                  <AccountButton onClick={() => {}}>
                     Update Password
                  </AccountButton>
               </div>
            </AccountCard>
         </ProfileCardsGrid>
      </>
   );
}
