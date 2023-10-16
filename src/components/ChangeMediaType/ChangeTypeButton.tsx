import { useRouter } from "next/router";

type Props = {
   isSelected: boolean;
   children: React.ReactNode;
   mediaType: "tv" | "movie";
};

export default function ChangeTypeButton({
   isSelected,
   children,
   mediaType,
}: Props) {
   const router = useRouter();

   const handleClick = () => {
      router.push({ query: { ...router.query, media_type: mediaType } });
   };

   return (
      <button
         onClick={handleClick}
         className={`flex items-center h-10 px-3 font-title text-sm ${
            isSelected
               ? "bg-light-1 text-dark-1 dark:bg-dark-1 dark:text-light-1"
               : "text-light-1 hover:bg-secondary-light dark:text-dark-1 dark:hover:bg-secondary-dark"
         } `}
      >
         {children}
      </button>
   );
}
