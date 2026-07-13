import { transition } from "./transitions";

export const fade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition,
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};