import Link from "next/link";

type Props = {};

export default function MobileSkipButton({}: Props) {
   return (
      <Link
         href={"/"}
         className="text-xs sm:text-sm hover:underline text-black"
      >
         Continue without Signing in
      </Link>
   );
}
