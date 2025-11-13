import CardContainer from "./CardContainer";

interface Props {
   text: string;
   type?: "button" | "submit";
}

export default function FormButton({ text, type = "button" }: Props) {
   return (
      <CardContainer>
         <button
            type={type}
            className="rounded block text-black font-thin text-xl uppercase h-full w-full border border-border hover:border-border/40 duration-100 active:border-blue-500"
         >
            <span className="relative">
               {text}
               <div className="w-full h-px bg-border/60 absolute bottom-0 left-0 translate-y-0.5"></div>
            </span>
         </button>
      </CardContainer>
   );
}
