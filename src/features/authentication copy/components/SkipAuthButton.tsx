import Link from "next/link";
interface Props {
   login: boolean;
   mobile?: true;
}
export default function SkipAuthButton({ login, mobile }: Props) {
   return (
      <Link
         href="/"
         className={`text-xs sm:text-sm hover:underline duration-500 ${
            login ? "text-light-1" : "text-dark-1"
         } ${
            mobile
               ? "lg:hidden"
               : "hidden lg:block fixed bottom-10 right-10 z-10"
         }`}
      >
         Continue without Authentication
      </Link>
   );
}
