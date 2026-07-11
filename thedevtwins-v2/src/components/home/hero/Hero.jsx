import Container from "@/components/ui/Container";

import HeroContent from "@/components/home/hero/HeroContent";
import HeroImage from "@/components/home/hero/HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}