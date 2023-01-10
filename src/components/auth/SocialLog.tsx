import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = { provider: string; logo: StaticImageData };

export default function SocialLogin({ provider, logo }: Props) {
   return (
      <motion.button
         whileTap={{ scale: 0.95 }}
         className="rounded-full w-full bg-slate-800 text-white py-2 flex items-center shadow-xl relative group"
      >
         <div className="relative mx-auto">
            <Image src={logo} alt={provider} height={25} width={25} />
         </div>
         <div className="absolute right-1/2 translate-x-1/2 bottom-full -translate-y-1 bg-slate-800 text-xs rounded-full px-3 py-1 scale-0 group-hover:scale-100 duration-200">
            <div className="relative">
               {provider}
               <div className="absolute right-1/2 translate-x-1/2 top-full w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>
         </div>
      </motion.button>
   );
}
