export const staggerContainer = {
   initial: {},
   animate: { transition: { staggerChildren: 0.18 } },
   exit: {
      opacity: 0,
      transition: { duration: 0.5 },
   },
};

export const staggerItem = {
   initial: { scale: 0 },
   animate: {
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
   },
   exit: {},
};
