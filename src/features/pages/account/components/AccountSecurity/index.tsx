import Subtitle from "@/components/Subtitle";
import ProfileCardsGrid from "../ProfileCardsGrid";
import AccountCard from "../AccountCard";
import { useUser } from "@clerk/nextjs";
import UpdatePassword from "./UpdatePassword";
// import DeletePassword from "./DeletePassword";

type Props = {};

export default function AccountSecurity({}: Props) {
   const { user } = useUser();

   if (!user) return <></>;
   return (
      <>
         <Subtitle>Security</Subtitle>
         <ProfileCardsGrid>
            <AccountCard
               title={user.passwordEnabled ? "Update password" : "Add password"}
               expand
            >
               <UpdatePassword />
            </AccountCard>

            {/* {user.passwordEnabled && user.externalAccounts.length > 0 && (
               <AccountCard title="Delete password" expand>
                  <DeletePassword />
               </AccountCard>
            )} */}
         </ProfileCardsGrid>
      </>
   );
}
