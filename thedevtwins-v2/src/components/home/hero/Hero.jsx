import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[90vh]">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">

        <div className="grid min-h-[90vh] items-center gap-20 py-24 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </Container>
    </section>
  );
}