export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const pointerAnimation = {
  initial: { x: 0, y: 0 },
  animate: { x: 30, y: 30 },
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: "easeInOut",
  },
};