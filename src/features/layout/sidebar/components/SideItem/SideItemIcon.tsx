type Props = {
   isFilled: boolean;
   icon: string;
   smallIcon?: true;
};

export default function SideItemIcon({ isFilled, icon }: Props) {
   return (
      <div
         className={`h-full flex items-center justify-center aspect-square rounded ${
            icon === "star" ? "bg-blue-500 text-white" : ""
         }`}
      >
         <span
            style={isFilled ? { fontVariationSettings: `"FILL" 1` } : {}}
            className="material-symbols-outlined !text-center !flex-shrink-0 !text-xl"
         >
            {icon}
         </span>
      </div>
   );
}
