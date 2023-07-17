type Props = {
   onClick: () => void;
};

export default function ForgotPasswordButton({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="text-sm hover:underline cursor-pointer"
      >
         Forgot your password?
      </button>
   );
}
