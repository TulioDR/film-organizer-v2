import AccountUsername from "./AccountUsername";
import ConnectAccounts from "./ConnectAccounts";
import PageSubtitle from "@/common/components/PageSubtitle";
import EmailAddress from "./EmailAddress";

type Props = {};

export default function AccountProfile({}: Props) {
   return (
      <div className="">
         <PageSubtitle>Profile</PageSubtitle>
         <div className="w-full grid xl:grid-cols-2 xl:grid-rows-2 gap-4">
            <AccountUsername />

            <ConnectAccounts />

            <EmailAddress />
         </div>
      </div>
   );
}
