import { useRouter } from "next/router";

type Props = {
   isSelected: boolean;
   children: React.ReactNode;
   mediaType: "tv" | "movie";
   isDark: boolean;
};

export default function ChangeTypeButton({
   isSelected,
   children,
   mediaType,
   isDark,
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
               ? isDark
                  ? "bg-dark-1 text-light-1"
                  : "bg-light-1 text-dark-1"
               : isDark
               ? "text-dark-1 hover:bg-secondary-dark"
               : "text-light-1 hover:bg-secondary-light"
         } `}
      >
         {children}
      </button>
   );
}
