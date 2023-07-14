import { motion } from "framer-motion";

type Props = {
   isSignUp?: true;
};

export default function AuthFormMessage({ isSignUp }: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { duration: 0.5, delay: 1 },
         }}
         className="truncate"
      >
         {isSignUp
            ? "Sign Up using social networks"
            : "Login using social networks"}
      </motion.div>
   );
}
