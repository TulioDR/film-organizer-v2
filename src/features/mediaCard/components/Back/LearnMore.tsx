import Link from "next/link";

type Props = {
   href: string;
   onClick: () => void;
};

export default function LearnMore({ href, onClick }: Props) {
   return (
      <Link
         href={href}
         scroll={false}
         onClick={onClick}
         onMouseDown={(e) => e.preventDefault()}
         className="rounded-md h-full flex-1 flex items-center justify-center text-xs sm:text-sm font-medium font-oswald uppercase text-black bg-white"
      >
         Learn More
      </Link>
   );
}
