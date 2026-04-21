import MarqueeCard from "./MarqueeCard";
import { motion } from "framer-motion";
import { Media } from "@/common/models/Media";

type Props = {
   array: Media[];
   reverse: boolean;
};

export default function Marquee({ array, reverse }: Props) {
   return (
      <div className="flex items-center flex-1 h-full">
         <motion.div
            initial={{ y: 0 }}
            animate={{
               y: reverse ? "-100%" : "100%",
               transition: { duration: 200, ease: "linear", repeat: Infinity },
            }}
            className={`w-full h-max flex flex-col gap-1 py-0.5 relative`}
         >
            <div
               className={`absolute w-full flex flex-col gap-1 py-0.5 ${reverse ? "top-full" : "bottom-full"}`}
            >
               {array.map((media, index) => (
                  <MarqueeCard
                     key={media.id + "-" + index}
                     media={media}
                     index={index}
                  />
               ))}
            </div>
            {array.map((media, index) => (
               <MarqueeCard
                  key={media.id + "-" + index}
                  media={media}
                  index={index}
               />
            ))}
         </motion.div>
      </div>
   );
}
