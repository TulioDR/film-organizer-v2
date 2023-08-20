type Props = {
   onClick: () => void;
};

export default function ForgotPasswordButton({ onClick }: Props) {
   return (
      <button
         type="button"
         onClick={onClick}
         className="hover:underline cursor-pointer text-xs sm:text-sm"
      >
         Forgot your password?
      </button>
   );
}
