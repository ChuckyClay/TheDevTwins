export const transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const fastTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};

export const slowTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

export const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export const staggerTransition = {
  staggerChildren: 0.15,
  delayChildren: 0.1,
};