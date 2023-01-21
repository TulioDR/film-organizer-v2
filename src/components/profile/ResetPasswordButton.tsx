import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import useThemeContext from "../../context/ThemeContext";
type Props = { openModal: () => void };

export default function ResetPasswordButton({ openModal }: Props) {
   const { themeColor } = useThemeContext();
   const supabaseClient = useSupabaseClient();
   const user = useUser()!;
   const forgotPasswordHandler = async () => {
      const { error } = await supabaseClient.auth.resetPasswordForEmail(
         user.email!,
         {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
         }
      );
      if (error) alert(error.message);
      else {
         openModal();
      }
   };
   return (
      <motion.button
         whileTap={{ scale: 0.95 }}
         onTap={forgotPasswordHandler}
         style={{ backgroundColor: themeColor }}
         className="rounded-lg py-2 px-4 max-w-max"
      >
         Reset Password
      </motion.button>
   );
}
