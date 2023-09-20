type Props = {
   children: React.ReactNode;
   vertical?: true;
};

export default function GenreName({ children, vertical }: Props) {
   return (
      <span
         className={`text-lg uppercase font-elianto text-white text-center font-black ${
            vertical ? "h-min" : "tracking-widest"
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
