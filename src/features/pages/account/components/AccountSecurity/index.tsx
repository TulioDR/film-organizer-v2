import ProfileCardsGrid from "../ProfileCardsGrid";
import AccountCard from "../AccountCard";
import { useUser } from "@clerk/nextjs";
import UpdatePassword from "./UpdatePassword";
import PageSubtitle from "@/common/components/PageSubtitle";
// import DeletePassword from "./DeletePassword";

type Props = {};

export default function AccountSecurity({}: Props) {
   const { user } = useUser();

   if (!user) return <></>;
   return (
      <>
         <PageSubtitle>Security</PageSubtitle>
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
