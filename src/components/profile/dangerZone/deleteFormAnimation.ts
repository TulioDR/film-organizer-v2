export const deleteFormAnimation = {
   initial: { height: 0 },
   animate: {
      height: "auto",
      transition: {
         height: {
            duration: 0.4,
         },
      },
   },
   exit: {
      height: 0,
      transition: {
         height: {
            duration: 0.4,
         },
      },
   },
};
