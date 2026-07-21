import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent = (scrollTop / height) * 100;

      setProgress(percent);

      setVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (progress / 100) * circumference;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-8
      right-8
      z-[999]
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-slate-900/90
      backdrop-blur-xl
      shadow-xl
      border
      border-cyan-500/30
      hover:border-cyan-400
      transition
    "
    >
      <svg
        className="absolute h-full w-full -rotate-90"
        viewBox="0 0 60 60"
      >
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#1e293b"
          strokeWidth="3"
        />

        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#06b6d4"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <ChevronUp
        size={22}
        className="relative text-cyan-400"
      />
    </motion.button>
  );
}