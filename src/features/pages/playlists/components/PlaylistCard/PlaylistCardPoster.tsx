type Props = {};

export default function PlaylistCardPoster({}: Props) {
   return (
      <div className="h-full aspect-[2/3] relative ">
         <div className="absolute inset-0 rotate-6 bg-red-400 shadow-lg group-hover:rotate-12 group-active:rotate-12 duration-200 origin-bottom" />
         <div className="absolute inset-0 bg-red-500 shadow-lg" />
         <div className="absolute inset-0 -rotate-6 bg-red-600 shadow-lg group-hover:-rotate-12 group-active:-rotate-12 duration-200 origin-bottom" />
      </div>
   );
}
