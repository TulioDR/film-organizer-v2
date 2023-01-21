import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import DangerZoneCard from "../components/profile/DangerZoneCard";
import MainInfoCard from "../components/profile/MainInfoCard";
import ProfilePicture from "../components/profile/ProfilePicture";
import EmailSentModal from "../layout/modals/EmailSent/EmailSentModal";
import { GetServerSideProps } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const getServerSideProps: GetServerSideProps = async (context) => {
   const supabase = createServerSupabaseClient(context);
   const { data } = await supabase.auth.getSession();
   if (!data.session) {
      return {
         redirect: {
            destination: "/",
            permanent: false,
         },
      };
   }

   return {
      props: {},
   };
};

export default function Profile() {
   const user = useUser();
   const router = useRouter();
   useEffect(() => {
      if (!user) router.push("/");
   }, [user, router]);

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const closeModal = () => {
      setIsModalOpen(false);
   };
   const openModal = () => {
      setIsModalOpen(true);
   };

   if (!user) return null;
   return (
      <div>
         <PageTitle>Profile</PageTitle>
         <div className="mx-auto max-w-4xl space-y-5">
            <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
               <ProfilePicture />
               <MainInfoCard openModal={openModal} />
            </div>
            <DangerZoneCard />
         </div>
         <EmailSentModal
            isOpen={isModalOpen}
            close={closeModal}
            email={user.email!}
            forgotPassWord
         />
      </div>
   );
}
