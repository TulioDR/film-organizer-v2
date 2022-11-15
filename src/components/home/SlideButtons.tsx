import { useSwiper } from "swiper/react";

interface ButtonProps {
   onClick: () => void;
}

function Button({ onClick }: ButtonProps) {
   return (
      <div
         className={
            "w-12 aspect-square rounded-full bg-gray-400 drop-shadow-md cursor-pointer duration-300 opacity-0 group-hover:opacity-100"
         }
         onClick={onClick}
      ></div>
   );
}

export default function SlideButtons() {
   const swiper = useSwiper();

   return (
      <div className="flex space-x-3 absolute bottom-4 right-4">
         <Button onClick={() => swiper.slidePrev()} />
         <Button onClick={() => swiper.slideNext()} />
      </div>
   );
}
