import Link from "next/link";
interface Props {
   login: boolean;
}
export default function SkipAuthButton({ login }: Props) {
   return (
      <Link
         href="/"
         className={`fixed bottom-10 right-10 z-10 text-sm hover:underline duration-500 ${
            login ? "text-light-1" : "text-dark-1"
         }`}
      >
         Continue without Authentication
      </Link>
   );
}
