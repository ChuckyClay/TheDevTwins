import NavLinks from "./NavLinks";
import { cn } from "../../utils/cn";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 md:hidden",
        isOpen
          ? "max-h-96 border-t border-slate-800 opacity-100"
          : "max-h-0 opacity-0"
      )}
    >
      <div className="bg-slate-950/95 px-6 py-6 backdrop-blur-xl">
        <NavLinks
          direction="vertical"
          onNavigate={onClose}
        />
      </div>
    </div>
  );
}