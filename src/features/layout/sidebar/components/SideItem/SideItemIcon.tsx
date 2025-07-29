type Props = {
   isFilled: boolean;
   icon: string;
   smallIcon?: true;
};

export default function SideItemIcon({ isFilled, icon }: Props) {
   return (
      <span
         style={isFilled ? { fontVariationSettings: `"FILL" 1` } : {}}
         className="material-symbols-outlined !text-center !flex-shrink-0 !text-xl"
      >
         {icon}
      </span>
   );
}
