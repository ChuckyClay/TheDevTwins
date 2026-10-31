import { transition } from "./transitions";

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },

  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition,
  },

  exit: {
    opacity: 0,
    y: -24,
    filter: "blur(8px)",
    transition: {
      ...transition,
      duration: 0.35,
    },
  },
};