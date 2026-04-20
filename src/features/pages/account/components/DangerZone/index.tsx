import ProfileCard from "../AccountCard";
import PageSubtitle from "@/common/components/PageSubtitle";
import DeleteUserHandler from "./DeleteUserHandler";

type Props = {};

export default function DangerZone({}: Props) {
   return (
      <div className="w-full h-full flex flex-col">
         <PageSubtitle>Danger Zone</PageSubtitle>
         <ProfileCard title="Delete account">
            <div className="text-black dark:text-white">
               <div>
                  {
                     "This will also delete all the lists that you've created, and the that you have saved."
                  }
               </div>
               <div>{"This action cannot be undone."}</div>
            </div>
            <div className="flex justify-end">
               <DeleteUserHandler />
            </div>
         </ProfileCard>
      </div>
   );
}
