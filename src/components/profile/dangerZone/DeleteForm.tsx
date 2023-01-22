import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import DeleteFormButton from "./DeleteFormButton";
import DeleteInput from "./DeleteInput";
import { deleteFormAnimation } from "./deleteFormAnimation";
import { useState } from "react";
import { deleteUser } from "../../../api/user";
type Props = { close: () => void };

export default function DeleteForm({ close }: Props) {
   const user = useUser()!;
   const supabaseClient = useSupabaseClient();
   const deleteAccount = async () => {
      const { error, lists } = await deleteUser(user.id);
      console.log(lists);
      if (error) console.log(error.message);
      else supabaseClient.auth.signOut();
   };

   const [enableDelete, setEnableDelete] = useState<boolean>(false);
   return (
      <motion.div
         variants={deleteFormAnimation}
         initial="initial"
         animate="animate"
         exit="exit"
         className="overflow-hidden space-y-3"
      >
         <div className="text-sm">
            <div>Are you sure you want to delete your account?.</div>
            <div>This can't be undone.</div>
         </div>
         <DeleteInput setEnableDelete={setEnableDelete} />
         <div className="flex space-x-3">
            <DeleteFormButton onClick={close}>Cancel</DeleteFormButton>
            <DeleteFormButton
               enableDelete={enableDelete}
               onClick={deleteAccount}
               red
            >
               Delete
            </DeleteFormButton>
         </div>
      </motion.div>
   );
}
