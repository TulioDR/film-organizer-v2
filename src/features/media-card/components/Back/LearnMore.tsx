import Link from "next/link";

type Props = {
   onClick: () => void;
};

export default function LearnMore({ onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="bg-black text-white dark:text-black dark:bg-white flex items-center justify-center h-10 w-full rounded-md"
      >
         <span className="text-xs 2xl:text-sm font-medium uppercase">
            Learn More
         </span>
      </button>
   );
   // return (
   //    <button
   //       onClick={onClick}
   //       className="rounded-md h-full flex-1 flex items-center justify-center text-xs sm:text-sm font-medium uppercase text-white dark:text-black bg-black dark:bg-white"
   //    >
   //       Learn More
   //    </button>
   // );
   // return (
   //    <Link
   //       href={href}
   //       scroll={false}
   //       onClick={onClick}
   //       onMouseDown={(e) => e.preventDefault()}
   //       className="rounded-md h-full flex-1 flex items-center justify-center text-xs sm:text-sm font-medium font-oswald uppercase text-black bg-white"
   //    >
   //       Learn More
   //    </Link>
   // );
}
