import { Transition } from "framer-motion";

const HOME_DURATION = 1;
const HOME_EASE = "easeInOut";
const HOME_TRANSITION: Transition = {
   duration: HOME_DURATION,
   ease: HOME_EASE,
};

export { HOME_TRANSITION, HOME_DURATION, HOME_EASE };
