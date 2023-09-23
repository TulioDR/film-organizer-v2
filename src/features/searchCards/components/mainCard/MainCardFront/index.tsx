import Poster from "@/components/Poster";
type Props = {
   title: string;
   posterPath: string;
};

export default function MainCardFront({ title, posterPath }: Props) {
   return (
      <div className="cursor-pointer relative [backface-visibility:hidden] overflow-hidden rounded-3xl">
         <Poster alt={title} posterPath={posterPath} size="lg" />
         <div className="w-full h-full bg-black/70 absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500" />
         <div className="absolute top-0 left-0 grid place-content-center w-full h-full p-5 translate-x-full group-hover:translate-x-0 duration-500">
            <span className="text-lg uppercase font-title text-white text-center tracking-wider">
               {title}
            </span>
         </div>
      </div>
   );
}
