type Props = {
   isMediaSaved: boolean;
   onClick: () => void;
};

export default function MainCardBookmark({ isMediaSaved, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="h-full bg-white text-black aspect-square rounded-xl grid place-content-center"
      >
         <span className="material-symbols-outlined !text-3xl">
            {isMediaSaved ? "bookmark" : "bookmark_border"}
         </span>
      </button>
   );
}
