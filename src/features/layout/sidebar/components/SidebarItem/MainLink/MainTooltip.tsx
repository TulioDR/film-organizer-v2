type Props = {
   hasItems: boolean;
   text: string;
};

export default function MainTooltip({ hasItems, text }: Props) {
   return (
      <div
         className={`w-56 pl-20 absolute top-0 left-0 group text-base bg-white flex items-center h-full rounded-r-md ${
            hasItems ? "rounded-br-none" : ""
         }`}
      >
         {hasItems && (
            <div className="p-2 absolute inset-0">
               <div className="group-hover:bg-black rounded-md h-full w-full" />
            </div>
         )}
         <span className="mix-blend-difference">{text}</span>
      </div>
   );
}
