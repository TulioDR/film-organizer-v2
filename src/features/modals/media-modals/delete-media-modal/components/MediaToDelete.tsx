import { SavedMedia } from "@/common/models/Media";

type Props = {
   media: SavedMedia[];
   movie?: boolean;
};

export default function MediaToDelete({}: Props) {
   return (
      <></>
      // <ul>
      //    {media.length ? (
      //       media.map((item) => (
      //          <li key={item.id} className="h-6 pl-2">
      //             - {item.media_title}
      //          </li>
      //       ))
      //    ) : (
      //       <span className="h-6 pl-2">
      //          {`No ${movie ? "Movies" : "TV Series"} are going to be deleted`}
      //       </span>
      //    )}
      // </ul>
   );
}
