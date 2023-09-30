type Props = {
   isFilled: boolean;
   icon: string;
   isMainLink?: true;
};

export default function SideItemIcon({ isFilled, icon, isMainLink }: Props) {
   return (
      <span
         style={isFilled ? { fontVariationSettings: `"FILL" 1` } : {}}
         className={`material-symbols-outlined  ${
            isMainLink
               ? " !w-10 !text-center !flex-shrink-0 !text-2xl"
               : "!text-xl"
         }`}
      >
         {icon}
      </span>
   );
}
