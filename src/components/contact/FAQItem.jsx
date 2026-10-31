import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({
  item,
  isOpen,
  onToggle,
}) {

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40">

      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-white">
          {item.question}
        </span>

        <ChevronDown
          size={22}
          className={`text-cyan-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-800 px-6 py-5">
              <p className="leading-8 text-slate-400">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}