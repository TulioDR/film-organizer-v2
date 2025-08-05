export const containerVariant = {
   initial: {},
   animate: { transition: { staggerChildren: 0.2 } },
   exit: {},
};

export const itemVariant = {
   initial: { y: "100%" },
   animate: { y: "0%", transition: { duration: 0.4 } },
   exit: { y: "-100%", transition: { duration: 0.4 } },
};
