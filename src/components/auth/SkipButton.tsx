import Link from "next/link";
interface Props {
   forgotPassWord: boolean;
}
export default function SkipButton({ forgotPassWord }: Props) {
   return (
      <Link
         href={"/"}
         className={`fixed bottom-10 left-10 z-10 text-sm hover:underline duration-500 ${
            forgotPassWord ? "text-white" : "text-black"
         }`}
      >
         Continue without Signing in
      </Link>
   );
}
