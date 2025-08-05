export const homeSlider = {
   initial: {},
   animate: { transition: { staggerChildren: 0.15 } },
   exit: {
      opacity: 0,
      transition: { duration: 0.3 },
   },
};

export const homeCard = {
   initial: { opacity: 0, scale: 0.8 },
   animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};

export const mediaDescription = {
   initial: { opacity: 0 },
   animate: { opacity: 1, transition: { duration: 0.3 } },
   exit: { opacity: 0, transition: { duration: 0.3 } },
};
