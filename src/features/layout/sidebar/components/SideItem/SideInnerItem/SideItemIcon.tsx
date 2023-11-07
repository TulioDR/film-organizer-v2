type Props = {
   isFilled: boolean;
   icon: string;
   smallIcon?: true;
};

export default function SideItemIcon({ isFilled, icon, smallIcon }: Props) {
   return (
      <span
         style={isFilled ? { fontVariationSettings: `"FILL" 1` } : {}}
         className={`material-symbols-outlined !w-10 !text-center !flex-shrink-0 ${
            smallIcon ? "!text-xl mr-2" : "!flex-shrink-0 !text-2xl"
         }`}
      >
         {icon}
      </span>
   );
}
