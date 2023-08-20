type Props = {
   onClick: () => void;
   login: boolean;
};

export default function ChangeAuthTypeButton({ onClick, login }: Props) {
   return (
      <button
         onClick={onClick}
         className="flex items-center gap-1 text-sm hover:underline text-xs sm:text-sm"
      >
         <span>
            {login ? "Don't have an account?" : "Already have an account?"}
         </span>
         <span className="text-blue-600">{login ? "Register!" : "Login!"}</span>
      </button>
   );
}
