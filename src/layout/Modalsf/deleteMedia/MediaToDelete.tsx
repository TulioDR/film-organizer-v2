import React from "react";

type Props = {
   media: any[];
   movie?: boolean;
};

export default function MediaToDelete({ media, movie }: Props) {
   return (
      <ul>
         {media.length ? (
            media.map((item) => (
               <li key={item.id} className="h-6 pl-2">
                  - {item.name}
               </li>
            ))
         ) : (
            <span className="h-6 pl-2">
               {`No ${movie ? "Movies" : "TV Series"} are going to be deleted`}
            </span>
         )}
      </ul>
   );
}
