import HomeTicker from "../HomeTicker";

type Props = {};

export default function Mobile({}: Props) {
   return (
      <div className="px-0 lg:px-32 h-[100svh] w-full">
         <div className="h-full w-full">
            <HomeTicker />
         </div>
      </div>
   );
}
