import { motion } from "framer-motion";
import { useSelector } from "react-redux";

type Props = { openModal: () => void };

export default function ResetPasswordButton({}: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   const forgotPasswordHandler = async () => {
      // c
      // if (error) alert(error.message);
      // else {
      //    openModal();
      // }
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
