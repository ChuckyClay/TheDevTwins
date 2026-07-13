import { transition } from "./transitions";

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

export const slideRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const slideDown = {
  hidden: {
    opacity: 0,
    y: -80,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};