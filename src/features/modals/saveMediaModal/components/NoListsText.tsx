import React from "react";

type Props = {};

export default function NoListsText({}: Props) {
   return (
      <div className="text-sm text-center my-5">
         You need to create Lists first to start saving Movies and Series in
         them
      </div>
   );
}
