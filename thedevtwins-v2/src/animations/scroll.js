import {
  useScroll,
  useTransform,
} from "framer-motion";

/*
|--------------------------------------------------------------------------
| Slow Parallax
|--------------------------------------------------------------------------
*/

export function useParallaxSlow() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  return { y };
}

/*
|--------------------------------------------------------------------------
| Fast Parallax
|--------------------------------------------------------------------------
*/

export function useParallaxFast() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -220]
  );

  return { y };
}

/*
|--------------------------------------------------------------------------
| Zoom
|--------------------------------------------------------------------------
*/

export function useScrollScale() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  return { scale };
}

/*
|--------------------------------------------------------------------------
| Fade
|--------------------------------------------------------------------------
*/

export function useScrollFade() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [1, 1, 0.6]
  );

  return { opacity };
}

/*
|--------------------------------------------------------------------------
| Rotate
|--------------------------------------------------------------------------
*/

export function useScrollRotate() {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 4]
  );

  return { rotate };
}

/*
|--------------------------------------------------------------------------
| Horizontal Left
|--------------------------------------------------------------------------
*/

export function useScrollLeft(distance = 80) {
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [-distance, 0]
  );

  return { x };
}

/*
|--------------------------------------------------------------------------
| Horizontal Right
|--------------------------------------------------------------------------
*/

export function useScrollRight(distance = 80) {
  const { scrollYProgress } = useScroll();

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [distance, 0]
  );

  return { x };
}