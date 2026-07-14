export const transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const fastTransition = {
  duration: 0.3,
  ease: transition.ease,
};

export const slowTransition = {
  duration: 0.9,
  ease: transition.ease,
};

export const springTransition = {
  type: "spring",
  stiffness: 140,
  damping: 18,
};

export const hoverTransition = {
  duration: 0.22,
  ease: "easeOut",
};

export const staggerTransition = {
  delayChildren: 0.05,
  staggerChildren: 0.08,
};

export const viewport = {
  once: false,
  amount: 0.15,
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
};