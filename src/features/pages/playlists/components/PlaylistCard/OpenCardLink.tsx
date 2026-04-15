import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import Link from "next/link";

type Props = {
   href: string;
};

export default function OpenCardLink({ href }: Props) {
   return (
      <Link
         href={href}
         style={{ borderRadius: STANDARD_RADIUS }}
         className="h-full px-4 text-sm flex items-center justify-center bg-accent hover:bg-accent/80 active:bg-accent/80 text-white tracking-wide font-medium"
      >
         Open playlist
      </Link>
   );
}
