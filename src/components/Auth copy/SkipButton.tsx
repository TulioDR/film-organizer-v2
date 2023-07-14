import Link from "next/link";
interface Props {
   reset?: boolean;
}
export default function SkipButton({ reset }: Props) {
   return (
      <div className="w-full flex justify-end">
         <Link
            href={"/"}
            className="bg-slate-800 text-white py-1 px-4 rounded-full text-sm"
         >
            {reset ? "Cancel" : "Skip"}
         </Link>
      </div>
   );
}
