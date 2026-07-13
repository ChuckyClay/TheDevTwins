import { transition } from "./transitions";

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  enter: {
    opacity: 1,
    y: 0,
    transition,
  },

  exit: {
    opacity: 0,
    y: -20,
    transition: {
      ...transition,
      duration: 0.35,
    },
  },
};

export const pageFade = {
  hidden: {
    opacity: 0,
  },

  enter: {
    opacity: 1,
    transition,
  },

  exit: {
    opacity: 0,
    transition,
  },
};

export const pageSlideLeft = {
  hidden: {
    x: 80,
    opacity: 0,
  },

  enter: {
    x: 0,
    opacity: 1,
    transition,
  },

  exit: {
    x: -80,
    opacity: 0,
    transition,
  },
};

export const pageSlideRight = {
  hidden: {
    x: -80,
    opacity: 0,
  },

  enter: {
    x: 0,
    opacity: 1,
    transition,
  },

  exit: {
    x: 80,
    opacity: 0,
    transition,
  },
};