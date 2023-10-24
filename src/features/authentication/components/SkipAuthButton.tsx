import Link from "next/link";
interface Props {
   white?: true;
}
export default function SkipAuthButton({ white }: Props) {
   return (
      <Link
         href="/"
         className={`text-xs sm:text-sm md:text-base z-10 hover:underline absolute top-10 md:top-auto md:bottom-10 right-5 sm:right-10 md:right-auto md:left-10 h-8 flex items-center ${
            white ? "text-dark-1" : "text-light-1"
         } `}
      >
         Skip Authentication
      </Link>
   );
}
