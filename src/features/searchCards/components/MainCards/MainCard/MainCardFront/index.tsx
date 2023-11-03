import Poster from "@/components/Poster";
import MainCardTitle from "./MainCardTitle";
type Props = {
   title: string;
   posterPath: string;
   isLeaving: boolean;
};

export default function MainCardFront({ title, posterPath, isLeaving }: Props) {
   return (
      <div className="cursor-pointer relative [backface-visibility:hidden] overflow-hidden rounded-3xl">
         <Poster alt={title} posterPath={posterPath} size="lg" />
         {!isLeaving && (
            <>
               <div className="hidden sm:block w-full h-full bg-black/70 absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500" />
               <MainCardTitle>{title}</MainCardTitle>
            </>
         )}
      </div>
   );
}
