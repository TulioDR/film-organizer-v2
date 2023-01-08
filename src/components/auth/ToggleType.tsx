type Props = {
   isLogin: boolean;
   toggle: () => void;
};

export default function ToggleType({ isLogin, toggle }: Props) {
   return (
      <div className="text-sm text-center">
         <span className="text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
         </span>
         <span onClick={toggle} className="text-blue-600 cursor-pointer">
            {isLogin ? "Register!" : "Log In!"}
         </span>
      </div>
   );
}
