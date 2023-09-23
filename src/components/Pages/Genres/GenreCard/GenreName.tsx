type Props = {
   children: React.ReactNode;
   vertical?: true;
};

export default function GenreName({ children, vertical }: Props) {
   return (
      <span
         className={`text-lg uppercase font-title text-white ${
            vertical ? "h-min text-center" : "tracking-widest truncate"
         }`}
         style={
            vertical && {
               writingMode: "vertical-lr",
               textOrientation: "upright",
            }
         }
      >
         {children}
      </span>
   );
}
