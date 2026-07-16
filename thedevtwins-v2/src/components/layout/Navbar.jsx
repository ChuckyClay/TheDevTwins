import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import NavLinks from "@/components/layout/NavLinks";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "mx-4 mt-4 rounded-2xl border border-slate-800/70 bg-slate-950/80 shadow-2xl shadow-cyan-500/5 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <Container
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          <Logo />

          <div className="hidden items-center gap-6 md:flex">
            <NavLinks />

            <Link
              to="/contact"
              className="rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              Start Project
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 transition duration-300 hover:bg-slate-800/70 hover:text-cyan-400 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </Container>

      </header>

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
    </>
  );
  
}