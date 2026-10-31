import { transition } from "./transitions";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition
  },
};