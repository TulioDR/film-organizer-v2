import Link from "next/link";

export default function SkipButton() {
   return (
      <div className="w-full flex justify-end">
         <Link
            href="/"
            className="bg-slate-800 text-white py-1 px-4 rounded-full text-sm"
         >
            Skip
         </Link>
      </div>
   );
}
