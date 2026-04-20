import Corner from "./Corner";

type Props = {};

export default function Corners({}: Props) {
   return (
      <>
         <Corner hor className="top-0 left-0" />
         <Corner ver className="top-0 left-0" />

         <Corner hor className="top-0 right-0" />
         <Corner ver className="top-0 right-0" />

         <Corner hor className="bottom-0 right-0" />
         <Corner ver className="bottom-0 right-0" />

         <Corner hor className="bottom-0 left-0" />
         <Corner ver className="bottom-0 left-0" />
      </>
   );
}
