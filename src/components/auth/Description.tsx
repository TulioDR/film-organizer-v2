import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {};

export default function Description({}: Props) {
   const router = useRouter();
   const goHome = () => {
      router.push("/");
   };
   return (
      <div className="w-full sm:w-96 bg-slate-800 bg-opacity-90 text-white grid place-content-center p-12">
         <div className="flex flex-col">
            <div className="text-2xl font-bold text-center">
               {"Film's Organizer"}
            </div>
            <div className="overview text-sm text-center mb-5 mt-4">
               A place for you to easily manage Movies and TV Series in lists
               created by you.
            </div>
            <motion.button
               whileTap={{ scale: 0.9 }}
               onTap={goHome}
               className="mx-auto py-3 px-5 rounded-lg bg-white text-slate-800 font-semibold"
            >
               Try It!
            </motion.button>
         </div>
      </div>
   );
}
