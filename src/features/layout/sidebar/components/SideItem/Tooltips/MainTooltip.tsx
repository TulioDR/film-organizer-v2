type Props = {
   hasItems: boolean;
   text: string;
};

export default function MainTooltip({ hasItems, text }: Props) {
   return (
      <div
         className={`w-40 absolute left-full top-0 text-base h-16 py-2 pr-2 block rounded-r-md bg-white ${
            hasItems ? "rounded-br-none" : ""
         }`}
      >
         <div
            className={`h-full w-full flex items-center pl-4 rounded-r-md ${
               hasItems ? "group-hover:bg-black" : ""
            }`}
         >
            {text}
         </div>
      </div>
   );
}
