import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import NavLinks from "@/components/layout/NavLinks";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-500 md:hidden ${
        isOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
      }`}
    >
      {/* Backdrop */}

      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Menu */}

      <div
        className={`fixed right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-slate-950 shadow-2xl transition-transform duration-500 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 p-6">

          <div>
            <h2 className="text-xl font-bold text-white">
              The DevTwins
            </h2>

            <p className="text-sm text-slate-400">
              Software Development
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-cyan-400"
          >
            <FaTimes size={22} />
          </button>

        </div>

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto px-6 py-8">

          <NavLinks
            direction="vertical"
            onNavigate={onClose}
            className="space-y-3"
          />

        </div>

        {/* Footer */}

        <div className="border-t border-slate-800 p-6">

          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full rounded-xl bg-cyan-500 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Start Project
          </Link>

          <div className="mt-8 space-y-3 text-sm text-slate-500">

            <p>
              Embu, Kenya
            </p>

            <p>
              thedevtwins@gmail.com
            </p>

            <p>
              +254 745 739 234
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}