import ProfileImage from "./ProfileImage";
import RevealHorizontal from "../../animations/RevealHorizontal";
type Props = {
   openPictureModal: () => void;
};

export default function ProfilePicture({ openPictureModal }: Props) {
   return (
      <RevealHorizontal>
         <div
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={openPictureModal}
         >
            <ProfileImage />
         </div>
      </RevealHorizontal>
   );
}
