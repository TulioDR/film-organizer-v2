const cardAnimation = {
   default: {
      initial: { opacity: 0, y: "20%" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "20%" },
   },
   next: {
      initial: { opacity: 0, x: "50%" },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: "-50%" },
   },
   prev: {
      initial: { opacity: 0, x: "-50%" },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: "50%" },
   },
};
export default cardAnimation;
