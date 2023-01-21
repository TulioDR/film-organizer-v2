import { useUser } from "@supabase/auth-helpers-react";
import React from "react";
import { separateByCommas } from "../../utils/commas";
import CardTitle from "./CardTitle";
import ProfileRow from "./ProfileRow";
import ResetPasswordButton from "./ResetPasswordButton";

type Props = {
   openModal: () => void;
};
export default function MainInfoCard({ openModal }: Props) {
   const user = useUser()!;
   return (
      <div className="md:flex-1 flex flex-col h-72 md:h-auto w-full bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-xl rounded-xl p-5">
         <CardTitle>User</CardTitle>
         <div className="flex flex-col justify-center flex-1 text-sm md:text-base space-y-1">
            <ProfileRow label="Email:">{user.email!}</ProfileRow>
            <ProfileRow label="Logged in with:">
               <span className="capitalize">{user.app_metadata.provider!}</span>
            </ProfileRow>
            <ProfileRow label="This account is connected with:">
               {user.app_metadata.providers!.map((item: any, index: number) => (
                  <span key={item} className="mr-1 capitalize">
                     {item}
                     {separateByCommas(user.app_metadata.providers!, index)}
                  </span>
               ))}
            </ProfileRow>
            <ResetPasswordButton openModal={openModal} />
         </div>
      </div>
   );
}
