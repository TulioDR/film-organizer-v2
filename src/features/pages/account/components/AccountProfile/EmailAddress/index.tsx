import { useUser } from "@clerk/nextjs";
import AccountCard from "../../AccountCard";
type Props = {};

export default function EmailAddress({}: Props) {
   const { user } = useUser();

   return (
      <AccountCard title="Email addresses">
         {user?.emailAddresses.map((email, index) => (
            <div key={index}>{email.emailAddress}</div>
         ))}
      </AccountCard>
   );
}
