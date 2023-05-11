type Props = {};

export default function HomeGenres({}: Props) {
   return (
      <div className="text-sm text-dark-text-hard hidden sm:flex items-center space-x-2">
         <span>Crime</span>
         <span>|</span>
         <span>Drama</span>
         <span>|</span>
         <span>Mystery</span>
      </div>
   );
}
