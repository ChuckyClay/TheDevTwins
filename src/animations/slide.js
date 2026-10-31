import { transition } from "./transitions";

export const slideLeft = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition
  },
};

export const slideRight = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition
  },
};

export const slideUp = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition
  },
};

export const slideDown = {
  hidden: {
    y: -60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition
  },
};