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
         className="h-full flex items-center justify-center px-4 bg-accent hover:bg-accent/80 active:bg-accent/80 text-white tracking-widest font-medium"
      >
         Open playlist
      </Link>
   );
}
