import { Transition } from "framer-motion";

const smoothScaleTransition: Transition = {
   type: "spring",
   stiffness: 150,
   damping: 20,
   mass: 1,
};
export { smoothScaleTransition };
