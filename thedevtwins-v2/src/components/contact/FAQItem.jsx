import { useState } from "react";

export default function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-white">
          {item.question}
        </span>

        <span className="text-2xl text-cyan-400">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-slate-800 px-6 py-5">
          <p className="leading-7 text-slate-400">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}