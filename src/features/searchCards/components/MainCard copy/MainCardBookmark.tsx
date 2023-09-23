type Props = {
   isMediaSaved: boolean;
   onClick: () => void;
};

export default function MainCardBookmark({ isMediaSaved, onClick }: Props) {
   return (
      <button onClick={onClick} className="h-full grid place-content-center">
         <span className="material-symbols-outlined !text-4xl">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
