import { staggerTransition } from "./transitions";

export const staggerContainer = {
  hidden: {},

  visible: {
    transition:staggerTransition
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition:staggerTransition
  },
};