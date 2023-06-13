export const staggerContainer = {
   initial: {},
   animate: { transition: { staggerChildren: 0.1 } },
   exit: {
      opacity: 0,
      transition: { duration: 0.4 },
   },
};

export const staggerItem = {
   initial: { opacity: 0, scale: 0.8 },
   animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};
