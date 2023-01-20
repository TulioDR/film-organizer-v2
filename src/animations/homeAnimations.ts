export const homeContainer = {
   initial: {},
   animate: { transition: { staggerChildren: 0.5 } },
   exit: {},
};

export const homeCardContainer = {
   initial: {},
   animate: { transition: { staggerChildren: 0.2 } },
   exit: {
      x: 200,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
   },
};

export const homeCard = {
   initial: { x: 200, opacity: 0 },
   animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {},
};

export const homeTitle = {
   initial: { x: "-100%", opacity: 0 },
   animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
   exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
   },
};
