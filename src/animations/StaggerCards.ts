export const staggerContainer = {
   initial: {},
   animate: { transition: { staggerChildren: 0.13 } },
   exit: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
};

export const staggerItem = {
   initial: { opacity: 0 },
   animate: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};
