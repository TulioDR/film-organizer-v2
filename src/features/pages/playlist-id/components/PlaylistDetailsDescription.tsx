type Props = {
   description: string | undefined;
};

export default function PlaylistDetailsDescription({ description }: Props) {
   return (
      <div className="w-full flex flex-col gap-41 pb-4">
         <div className="text-black dark:text-white font-medium tracking-wider uppercase">
            Description
         </div>
         <div className="text-black/80 dark:text-white/80">
            {description || "This playlist has no description"}
         </div>
      </div>
   );
}
